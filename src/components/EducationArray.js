import { useState, useEffect } from "react";

const parseEducation = (mdContent) => {
  const education = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const company = line.substr(3).trim();
      const positionLine = lines[++i]
        .substr(2)
        .split("|")
        .map((s) => s.trim());
      const position = positionLine[0].slice(1, -1);
      const duration = positionLine[1].trim();
      const imageLine = lines[++i];
      const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
      const tagsLine = lines[++i];
      const tagsText = tagsLine.split(":")[1] ? tagsLine.split(":")[1].trim() : "";
      const tags = tagsText.split(", ").map(tag => tag.trim()).filter(tag => tag !== "");
      
      const badges = [];
      const listItems = [];

      while (i + 1 < lines.length && !lines[i + 1].startsWith("## ")) {
        i++;
        
        if (lines[i].startsWith("- Badges:")) {
          while (i + 1 < lines.length && lines[i + 1].startsWith("  - ")) {
            i++;
            const badgeLine = lines[i].substr(4).split("[");
            const badgeName = badgeLine[0].trim();
            const badgeColor = badgeLine[1] ? badgeLine[1].split("]")[0].trim() : "gray";
            badges.push({ name: badgeName, colorScheme: badgeColor });
          }
        } else if (lines[i].startsWith("- List Items:")) {
          while (i + 1 < lines.length && lines[i + 1].startsWith("  - ")) {
            i++;
            listItems.push(lines[i].substr(4));
          }
        }
        
        if (i + 1 < lines.length && lines[i + 1].startsWith("## ")) {
          break;
        }
      }

      education.push({
        image,
        company,
        position,
        duration,
        badges,
        listItems,
        tags,
      });
      
      if (i + 1 < lines.length && lines[i + 1].startsWith("## ")) {
        i--;
      }
    }
  }

  return education;
};

const EducationArray = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/content/Education.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        const parsedEducation = parseEducation(mdContent);
        setEducation(parsedEducation);
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return education;
};

export default EducationArray;
