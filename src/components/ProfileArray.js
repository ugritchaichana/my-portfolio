import { useState, useEffect } from "react";

const parseProfile = (mdContent) => {
  const profile = {
    siteName: "",
    headerName: "",
    headerRole: "",
    headerDesc: "",
    about: "",
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    location: "",
    languages: [],
    skills: [],
    professionalSummary: "",
    logo: "",
  };

  const lines = mdContent.split("\n");
  let inSkillsSection = false;
  let inLanguagesSection = false;

  // First line is the name
  if (lines.length > 0 && lines[0].startsWith("# ")) {
    profile.headerName = lines[0].substr(2).trim();
  }

  // Second h2 is usually the role
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("## Full-Stack Developer")) {
      profile.headerRole = line.substr(3).trim();
    } else if (line.startsWith("## About Me")) {
      // Get the content after "## About Me" until the next heading
      let aboutContent = "";
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine.startsWith("#")) {
          break;
        }
        if (nextLine) {
          aboutContent += nextLine + " ";
        }
      }
      profile.about = aboutContent.trim();
    } else if (line.startsWith("## Key Skills")) {
      inSkillsSection = true;
      inLanguagesSection = false;
      profile.skills = [];
    } else if (line.startsWith("## Contact Information")) {
      inSkillsSection = false;
      inLanguagesSection = false;
      // Process contact info
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine.startsWith("#")) {
          break;
        }
        if (nextLine.startsWith("- **Email:**")) {
          profile.email = nextLine.split("**Email:**")[1].trim();
        } else if (nextLine.startsWith("- **Location:**")) {
          profile.location = nextLine.split("**Location:**")[1].trim();
        } else if (nextLine.startsWith("- **LinkedIn:**")) {
          const linkedinPart = nextLine.split("**LinkedIn:**")[1].trim();
          profile.linkedin = linkedinPart.includes("(") ? 
            linkedinPart.match(/\(([^)]+)\)/)[1] : linkedinPart;
        } else if (nextLine.startsWith("- **GitHub:**")) {
          const githubPart = nextLine.split("**GitHub:**")[1].trim();
          profile.github = githubPart.includes("(") ? 
            githubPart.match(/\(([^)]+)\)/)[1] : githubPart;
        }
      }
    } else if (line.startsWith("## Languages")) {
      inSkillsSection = false;
      inLanguagesSection = true;
      profile.languages = [];
    } else if (line.startsWith("## Professional Summary")) {
      inSkillsSection = false;
      inLanguagesSection = false;
      // Get the content after "## Professional Summary" until the next heading
      let summaryContent = "";
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine.startsWith("#")) {
          break;
        }
        if (nextLine) {
          summaryContent += nextLine + " ";
        }
      }
      profile.professionalSummary = summaryContent.trim();
    } else if (line.startsWith("- ") && inSkillsSection) {
      profile.skills.push(line.substr(2).trim());
    } else if (line.startsWith("- ") && inLanguagesSection) {
      profile.languages.push(line.substr(2).trim());
    }
  }

  // Set default headerDesc from professionalSummary if not found
  if (!profile.headerDesc && profile.professionalSummary) {
    profile.headerDesc = profile.professionalSummary.split('.')[0] + '.';
  }

  return profile;
};

const ProfileArray = () => {
  const [profile, setProfile] = useState({
    siteName: "",
    headerName: "",
    headerRole: "",
    headerDesc: "",
    about: "",
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    location: "",
    languages: [],
    skills: [],
    professionalSummary: "",
    logo: "",
  });

  useEffect(() => {
    fetch("/content/Profile.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProfile(parseProfile(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return profile;
};

export default ProfileArray;
