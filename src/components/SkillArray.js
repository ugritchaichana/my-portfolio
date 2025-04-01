import { useState, useEffect } from "react";

// ฟังก์ชันสำหรับแปลงข้อมูล Markdown เป็น Object
const parseSkills = (mdContent) => {
  const skills = [];
  const categories = [];
  const lines = mdContent.split("\n");
  
  let currentCategory = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // เมื่อพบหัวข้อหลัก (# CategoryName)
    if (line.startsWith("# ")) {
      currentCategory = {
        name: line.substring(2).trim(),
        skills: []
      };
      categories.push(currentCategory);
    }
    // เมื่อพบรายการทักษะ (- SkillName [IconName])
    else if (line.startsWith("- ") && currentCategory) {
      const skillMatch = line.match(/- (.+) \[(.+)\]/);
      if (skillMatch) {
        const skillName = skillMatch[1].trim();
        const iconName = skillMatch[2].trim();
        
        currentCategory.skills.push({
          name: skillName,
          icon: iconName
        });
        
        // เก็บรายการ skill ทั้งหมดแบบ flat เพื่อความสะดวก
        skills.push({
          name: skillName,
          icon: iconName,
          category: currentCategory.name
        });
      }
    }
  }

  return { skills, categories };
};

const SkillArray = () => {
  const [skillData, setSkillData] = useState({ skills: [], categories: [] });

  useEffect(() => {
    fetch("/content/Skills.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch skills content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setSkillData(parseSkills(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching skills content:", error);
        // ถ้าไฟล์ไม่มีอยู่ ให้ใช้ข้อมูลเริ่มต้น
        setSkillData({ skills: [], categories: [] });
      });
  }, []);

  return skillData;
};

export default SkillArray;