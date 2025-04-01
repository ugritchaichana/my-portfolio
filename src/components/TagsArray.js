import { useState, useEffect } from "react";

const parseTags = (mdContent) => {
  const tags = [];
  const lines = mdContent.split("\n");
  
  // Skip the first few lines if they're headers
  let startIndex = 0;
  while (startIndex < lines.length && (lines[startIndex].startsWith('#') || lines[startIndex].trim() === '')) {
    startIndex++;
  }

  // Process tag lines (usually in format "- Tag: Description")
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) continue;
    
    // Check if line is a tag line (starts with -)
    if (line.startsWith('- ')) {
      // Extract tag value and potentially label
      const tagContent = line.substr(2);
      
      if (tagContent.includes(':')) {
        const [label, description] = tagContent.split(':').map(s => s.trim());
        tags.push({
          value: label,
          label: label
        });
      }
    }
  }
  
  return tags;
};

const TagsArray = (file) => {
  const [Tags, setTags] = useState([]);

  useEffect(() => {
    fetch(`/content/${file}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setTags(parseTags(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, [file]);

  return Tags;
};

export default TagsArray;
