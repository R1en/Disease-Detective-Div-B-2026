/**
 * Analytics Manager
 * Handles local storage of quiz and exam results.
 * Respects privacy: No data leaves the device.
 */
class AnalyticsManager {
    constructor() {
        this.STORAGE_KEY = 'dd_analytics_v1';
        this.storageAvailable = this._isStorageAvailable();
        this.data = this._load();
        if (!this.data.chapterViews) this.data.chapterViews = {};
    }

    _isStorageAvailable() {
        try {
            const testKey = '__test__';
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn('LocalStorage not available, analytics disabled:', e);
            return false;
        }
    }

    _load() {
        if (!this.storageAvailable) return { attempts: [], chapterViews: {} };
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            const data = stored ? JSON.parse(stored) : { attempts: [], chapterViews: {}, missedQuestions: {} };
            if (!data.missedQuestions) data.missedQuestions = {};
            if (!data.chapterViews) data.chapterViews = {};
            return data;
        } catch (e) {
            console.error('Analytics load error:', e);
            return { attempts: [], chapterViews: {}, missedQuestions: {} };
        }
    }

    _save() {
        if (!this.storageAvailable) return;
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.error('Analytics save error:', e);
        }
    }

    /**
     * Log a completed quiz/exam attempt
     * @param {string} quizId - e.g. 'part1', 'simulation-1'
     * @param {number} score - Raw score
     * @param {number} maxScore - Total possible
     * @param {string} mode - 'practice' or 'simulation'
     */
    logAttempt(quizId, score, maxScore, mode) {
        const attempt = {
            id: Date.now().toString(36) + Math.random().toString(36).substr(2),
            quizId,
            score,
            maxScore,
            percent: Math.round((score / maxScore) * 100),
            mode,
            timestamp: new Date().toISOString()
        };
        this.data.attempts.push(attempt);
        this._save();
        return attempt;
    }

    /**
     * Log a chapter view
     * @param {string} chapterId 
     */
    logChapterView(chapterId) {
        if (!this.data.chapterViews) this.data.chapterViews = {};

        if (!this.data.chapterViews[chapterId]) {
            this.data.chapterViews[chapterId] = { count: 0, lastViewed: null };
        }

        this.data.chapterViews[chapterId].count++;
        this.data.chapterViews[chapterId].lastViewed = new Date().toISOString();
        this._save();
    }

    /**
     * Get aggregate stats for a specific quiz
     */
    getStats(quizId) {
        const attempts = this.data.attempts.filter(a => a.quizId === quizId);
        if (!attempts.length) return null;

        const scores = attempts.map(a => a.score);
        const best = Math.max(...scores);
        const totalPossible = attempts[0].maxScore; // Assume constant max score
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

        return {
            count: attempts.length,
            best,
            bestPercent: Math.round((best / totalPossible) * 100),
            avg: Math.round(avg * 10) / 10,
            avgPercent: Math.round((avg / totalPossible) * 100),
            lastDate: attempts[attempts.length - 1].timestamp
        };
    }

    /**
     * Get all history sorted by date desc
     */
    getHistory() {
        return [...this.data.attempts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    getChapterStats() {
        const views = this.data.chapterViews || {};

        // Only count views for chapters that exist in the sidebar
        const navItems = Array.from(document.querySelectorAll('.nav-item'));
        const validChapterIds = new Set(navItems.map(item => item.getAttribute('data-chapter')).filter(Boolean));

        let viewedCount = 0;
        Object.keys(views).forEach(id => {
            if (validChapterIds.has(id)) viewedCount++;
        });

        const totalPossible = validChapterIds.size || 20;

        return {
            viewed: viewedCount,
            total: totalPossible,
            details: views
        };
    }

    getGlobalStats() {
        const attempts = this.data.attempts;
        if (!attempts || attempts.length === 0) {
            return { totalAttempts: 0, averageScore: 0 };
        }

        const totalPercent = attempts.reduce((sum, a) => sum + (a.percent || 0), 0);
        const avg = totalPercent / attempts.length;

        return {
            totalAttempts: attempts.length,
            averageScore: Math.round(avg * 10) / 10
        };
    }

    /**
     * Clear all data
     */
    reset() {
        this.data = { attempts: [], chapterViews: {}, missedQuestions: {} };
        this._save();

        // Also clear active quiz/sim progress
        if (this.storageAvailable) {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('quiz_progress_')) {
                    localStorage.removeItem(key);
                }
            });
        }
    }

    /**
     * Log a missed question
     * @param {string} topic - e.g. "Chapter 4"
     * @param {string} text - The question text (used as ID since we lack UIDs sometimes)
     */
    logMissedQuestion(topic, text) {
        if (!this.storageAvailable) return;

        // Sanitize key
        const key = text.substring(0, 50).replace(/[^a-zA-Z0-9]/g, '');

        if (!this.data.missedQuestions[key]) {
            this.data.missedQuestions[key] = {
                topic: topic,
                text: text.substring(0, 100) + '...',
                count: 0
            };
        }

        this.data.missedQuestions[key].count++;
        this._save();
    }

    /**
     * Get weak areas sorted by miss count
     */
    getWeakAreas() {
        const topicCounts = {};
        Object.values(this.data.missedQuestions).forEach(mq => {
            if (!topicCounts[mq.topic]) topicCounts[mq.topic] = 0;
            topicCounts[mq.topic] += mq.count;
        });

        // Convert to array and sort
        return Object.entries(topicCounts)
            .sort((a, b) => b[1] - a[1]) // Descending
            .map(([topic, count]) => ({ topic, count }));
    }
}

// Global Instance
window.AnalyticsManager = new AnalyticsManager();
