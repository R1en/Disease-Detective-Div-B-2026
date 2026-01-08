import re

def audit_content_file(file_path):
    print(f"Auditing {file_path}...")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # 1. Check for basic JS syntax errors (basic check)
    # matching braces for the huge object is hard with regex, relying on visual check mostly.
    
    # 2. Extract HTML content from backticks
    # Assuming content is in `content: \`...\`` blocks
    content_blocks = re.findall(r'content:\s*`([^`]*)`', content, re.DOTALL)
    
    print(f"Found {len(content_blocks)} content blocks.")
    
    total_links = 0
    malformed_links = 0
    
    all_hrefs = []

    for i, block in enumerate(content_blocks):
        # Check for unclosed tags (naive check)
        open_divs = len(re.findall(r'<div', block))
        close_divs = len(re.findall(r'</div>', block))
        
        if open_divs != close_divs:
            print(f"WARNING: Block {i} has mismatched divs: {open_divs} open vs {close_divs} closed.")
            # Print a snippet to identify the block
            print(f"Snippet: {block[:100].strip()}...")
            
        # Extract links
        hrefs = re.findall(r'href=["\']([^"\']+)["\']', block)
        for href in hrefs:
            total_links += 1
            all_hrefs.append(href)
            
            # Simple validation
            if href.startswith('http'):
                # Check for spaces or bad chars
                if ' ' in href:
                    print(f"ERROR: Malformed URL found: {href}")
                    malformed_links += 1
            elif href.startswith('#'):
                pass # Anchor
            elif href.startswith('mailto:'):
                pass
            else:
                # Relative link?
                pass

    print("\n--- Link Audit ---")
    print(f"Total links found: {total_links}")
    if malformed_links == 0:
        print("No obviously malformed URLs found.")
    else:
        print(f"Found {malformed_links} malformed URLs.")
        
    # Check for specific CSS classes usage
    print("\n--- Visual Class Audit ---")
    classes_to_check = ['neo-card', 'callout-header', 'accordion', 'drill-box', 'study-tip', 'exam-trap']
    for cls in classes_to_check:
        count = len(re.findall(f'class=["\'][^"\']*\\b{cls}\\b', content))
        print(f"Found '{cls}': {count} usage(s)")

    print("\nAudit Complete.")

if __name__ == "__main__":
    audit_content_file("c:/Users/minum/Documents/Agent/js/epidemic-engine-content.js")
