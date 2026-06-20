/* ============================================
   NexusLab - Interactive JavaScript
   ============================================ */

const textarea = document.getElementById('sandbox-textarea');
const codeDisplay = document.getElementById('code-highlight-layer').querySelector('code');

// Trigger syntax highlighter
function updateHighlighting() {
  const content = textarea.value;
  codeDisplay.textContent = content;
  Prism.highlightElement(codeDisplay);
}

textarea.addEventListener('input', updateHighlighting);

// Sync scroll
textarea.addEventListener('scroll', () => {
  const preLayer = document.getElementById('code-highlight-layer');
  preLayer.scrollTop = textarea.scrollTop;
  preLayer.scrollLeft = textarea.scrollLeft;
});

// Smart Keydown Listener for IDE typing assistance
textarea.addEventListener('keydown', function (e) {
  const value = this.value;
  const start = this.selectionStart;
  const end = this.selectionEnd;

  // 1. Handle Tab Key Insertion
  if (e.key === 'Tab') {
    e.preventDefault();
    this.value = value.substring(0, start) + "    " + value.substring(end);
    this.selectionStart = this.selectionEnd = start + 4;
    updateHighlighting();
  }

  // 2. Handle Smart Auto-Indentation & Split Braces on Enter
  else if (e.key === 'Enter') {
    e.preventDefault();

    // Find current line text up to the cursor index
    const textBeforeCursor = value.substring(0, start);
    const lastNewLineIndex = textBeforeCursor.lastIndexOf('\n');
    const currentLine = textBeforeCursor.substring(lastNewLineIndex + 1);

    // Match existing spaces/tabs for line indentation
    const indentMatch = currentLine.match(/^\s*/);
    const currentIndent = indentMatch ? indentMatch[0] : '';

    const trimmedLine = currentLine.trim();
    let addedIndent = '';

    // If pressing Enter between opening and closing curly braces, split them cleanly over three lines
    if (trimmedLine.endsWith('{') && value.charAt(start) === '}') {
      const innerContent = '\n' + currentIndent + '    ';
      const closingLine = '\n' + currentIndent;
      this.value = value.substring(0, start) + innerContent + closingLine + value.substring(end);
      this.selectionStart = this.selectionEnd = start + innerContent.length;
    }
    // If current line ends with opening curly brace, indent next line further
    else if (trimmedLine.endsWith('{')) {
      addedIndent = '    ';
      const insertText = '\n' + currentIndent + addedIndent;
      this.value = value.substring(0, start) + insertText + value.substring(end);
      this.selectionStart = this.selectionEnd = start + insertText.length;
    }
    // Default behavior: Copy previous line's exact indentation structure
    else {
      const insertText = '\n' + currentIndent;
      this.value = value.substring(0, start) + insertText + value.substring(end);
      this.selectionStart = this.selectionEnd = start + insertText.length;
    }
    updateHighlighting();
  }

  // 3. Handle Auto-pairing / Enclosures ( { [ ( " ' )
  else {
    const pairs = {
      '{': '}',
      '[': ']',
      '(': ')',
      '"': '"',
      "'": "'"
    };

    if (pairs[e.key] !== undefined) {
      e.preventDefault();
      const openBracket = e.key;
      const closingBracket = pairs[openBracket];

      // Wrap selected text or insert empty pair
      const selectedText = value.substring(start, end);
      this.value = value.substring(0, start) + openBracket + selectedText + closingBracket + value.substring(end);
      this.selectionStart = start + 1;
      this.selectionEnd = end + 1;
      updateHighlighting();
    }

    // Overwrite standard closing partners if typed immediately before them
    else if ((e.key === '}' || e.key === ']' || e.key === ')' || e.key === '"' || e.key === "'") && value.charAt(start) === e.key) {
      e.preventDefault();
      this.selectionStart = this.selectionEnd = start + 1;
    }
  }
});

// Collapse handler
function toggleCollapse(elementId) {
  const el = document.getElementById(elementId);
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

// Scroll to section helper
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Copies code from solutions directly into the testing sandbox
function copyToSandbox(codeId) {
  const code = document.getElementById(codeId).innerText;
  textarea.value = code;
  updateHighlighting();
  // Focus on code box
  textarea.focus();
}

// Copy Sandbox code to standard OS clipboard using standard fallback format
function copyToClipboard() {
  textarea.select();
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      alert('Copied sandbox code to clipboard!');
    } else {
      alert('Failed to copy. Try manual copy.');
    }
  } catch (err) {
    alert('Browser exception during clipboard action.');
  }
}

// Reset workspace
function clearSandbox() {
  textarea.value = '';
  codeDisplay.textContent = '';
  updateHighlighting();
}

// Toggle chapter panels inside accordion
function tog(id) {
  const body = document.getElementById(id);
  if (!body) return;
  const num = id.replace('c', '');
  const arrow = document.getElementById('a' + num);
  
  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    if (arrow) arrow.textContent = '▼';
  } else {
    body.classList.add('hidden');
    if (arrow) arrow.textContent = '▶';
  }
}

