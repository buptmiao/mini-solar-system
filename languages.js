/**
 * 太阳系模拟多语言支持
 * Solar System Simulation Multi-language Support
 */

const LANGUAGES = {
    "zh-CN": {
        code: "zh-CN",
        name: "简体中文",
        texts: {
            // 标题与介绍
            title: "太阳系行星运动模拟",
            subtitle: "此模拟展示了太阳、八大行星和月球的公转轨道与自转动画。行星大小和距离未按真实比例显示，公转速度按真实比例",
            
            // 操作指南
            guideTitle: "操作指南",
            mouseDrag: "鼠标拖动：旋转视角",
            mouseWheel: "鼠标滚轮：缩放场景",
            rightDrag: "右键拖动：平移视角",
            touchDrag: "单指拖动：旋转视角",
            pinch: "双指捏合：缩放场景",
            tapLegend: "点击图例：查看行星信息",
            
            // 行星图例
            legendTitle: "行星图例",
            sun: "太阳",
            mercury: "水星",
            venus: "金星",
            earth: "地球",
            mars: "火星",
            jupiter: "木星",
            saturn: "土星",
            uranus: "天王星",
            neptune: "海王星",
            moon: "月球",
            
            // 控制按钮
            pause: "暂停",
            resume: "继续",
            reset: "重置",
            
            // 速度控制
            speedControl: "模拟速度:",
            days: "天",
            seconds: "秒",
            preset1: "1天:1秒",
            preset2: "1周:1秒",
            preset3: "1月:1秒",
            preset4: "1年:1秒",
            
            // 底部信息
            exploreTitle: "太阳系探索",
            structureTitle: "太阳系结构",
            structureText: "太阳系由太阳及其周围的天体组成，包括八大行星、矮行星、卫星、小行星、彗星和星际尘埃等。太阳系的直径约为100天文单位（约150亿公里），而最外围的星际空间边界可能延伸至50,000天文单位。",
            missionTitle: "太阳系探测任务",
            missionText: "人类已经发射了许多探测器探索太阳系，包括旅行者1号和2号、好奇号火星车、卡西尼土星探测器等。这些任务大大增进了我们对太阳系各个天体的理解。",
            formationTitle: "行星形成",
            formationText: "太阳系形成于约46亿年前的一团旋转气体和尘埃云。随着物质凝聚，太阳在中心形成，而周围的物质形成了行星、卫星和其他天体。",
            
            // 行星信息
            tooltipTitle: "行星信息",
            typeLabel: "类型",
            diameterLabel: "直径",
            temperatureLabel: "温度",
            orbitLabel: "公转周期",
            rotationLabel: "自转周期",
            moonsLabel: "卫星数量",
            factsLabel: "趣闻"
        }
    },
    "en-US": {
        code: "en-US",
        name: "English",
        texts: {
            // Titles and Introduction
            title: "Solar System Planets Simulation",
            subtitle: "This simulation shows the orbital and rotational movements of the Sun, eight planets, and the Moon. Planet sizes and distances are not to scale, but orbital speeds are proportional to reality.",
            
            // Operation Guide
            guideTitle: "Operation Guide",
            mouseDrag: "Mouse Drag: Rotate View",
            mouseWheel: "Mouse Wheel: Zoom Scene",
            rightDrag: "Right Drag: Pan View",
            touchDrag: "One Finger Drag: Rotate View",
            pinch: "Pinch: Zoom Scene",
            tapLegend: "Tap Legend: View Planet Info",
            
            // Planet Legend
            legendTitle: "Planet Legend",
            sun: "Sun",
            mercury: "Mercury",
            venus: "Venus",
            earth: "Earth",
            mars: "Mars",
            jupiter: "Jupiter",
            saturn: "Saturn",
            uranus: "Uranus",
            neptune: "Neptune",
            moon: "Moon",
            
            // Control Buttons
            pause: "Pause",
            resume: "Resume",
            reset: "Reset",
            
            // Speed Control
            speedControl: "Simulation Speed:",
            days: "Days",
            seconds: "Seconds",
            preset1: "1 Day:1 Second",
            preset2: "1 Week:1 Second",
            preset3: "1 Month:1 Second",
            preset4: "1 Year:1 Second",
            
            // Bottom Information
            exploreTitle: "Solar System Exploration",
            structureTitle: "Solar System Structure",
            structureText: "The Solar System consists of the Sun and its surrounding celestial bodies, including eight planets, dwarf planets, moons, asteroids, comets, and interstellar dust. The diameter of the Solar System is about 100 astronomical units (approximately 15 billion kilometers), while the outermost boundary of interstellar space may extend to 50,000 astronomical units.",
            missionTitle: "Solar System Missions",
            missionText: "Humans have launched many probes to explore the Solar System, including Voyager 1 and 2, the Curiosity Mars rover, the Cassini Saturn probe, and more. These missions have greatly enhanced our understanding of the various celestial bodies in the Solar System.",
            formationTitle: "Planet Formation",
            formationText: "The Solar System formed about 4.6 billion years ago from a rotating cloud of gas and dust. As matter condensed, the Sun formed at the center, while the surrounding material formed planets, moons, and other celestial bodies.",
            
            // Planet Information
            tooltipTitle: "Planet Information",
            typeLabel: "Type",
            diameterLabel: "Diameter",
            temperatureLabel: "Temperature",
            orbitLabel: "Orbital Period",
            rotationLabel: "Rotation Period",
            moonsLabel: "Number of Moons",
            factsLabel: "Fun Facts"
        }
    }
};

// 默认语言
let currentLanguage = localStorage.getItem('solar-system-language') || 'zh-CN';

// 获取文本的函数
function getText(key) {
    return LANGUAGES[currentLanguage]?.texts[key] || LANGUAGES['zh-CN'].texts[key] || key;
}

// 切换语言函数
function setLanguage(langCode) {
    if (LANGUAGES[langCode]) {
        currentLanguage = langCode;
        localStorage.setItem('solar-system-language', langCode);
        updatePageLanguage();
    }
}

// 更新页面所有文本
function updatePageLanguage() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = getText(key);
        }
    });
    
    // 更新页面标题
    document.title = getText('title');
    
    // 更新特殊元素（如占位符等）
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) {
            el.placeholder = getText(key);
        }
    });
    
    // 更新行星数据（非DOM元素）
    updatePlanetData();
    
    // 触发自定义事件，供其他脚本响应语言变化
    document.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: currentLanguage } 
    }));
}

// 更新行星数据的语言
function updatePlanetData() {
    // 将PLANET_DATA复制到全局planetData变量
    window.planetData = {};
    
    // 为每个行星创建条目
    for (const planetId in PLANET_DATA) {
        window.planetData[planetId] = PLANET_DATA[planetId];
    }
}

// 初始化语言选择器
function initLanguageSelector() {
    const languageSelector = document.getElementById('language-selector');
    if (!languageSelector) return;
    
    // 清空现有选项
    languageSelector.innerHTML = '';
    
    // 添加所有语言选项
    Object.values(LANGUAGES).forEach(lang => {
        const option = document.createElement('div');
        option.className = 'language-option';
        option.textContent = lang.name;
        option.setAttribute('data-lang', lang.code);
        
        if (lang.code === currentLanguage) {
            option.classList.add('active');
        }
        
        option.addEventListener('click', () => {
            setLanguage(lang.code);
            
            // 更新活动状态
            document.querySelectorAll('.language-option').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
        
        languageSelector.appendChild(option);
    });
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    updatePageLanguage();
}); 

// 行星数据定义 - 合并静态数据和多语言数据
const PLANET_DATA = {
    sun: {
        englishName: "Sun",
        mass: "1.989 × 10^30 千克",
        gravity: "274 m/s²",
        distanceFromEarth: "约1.496亿公里 (1个天文单位)",
        composition: "氢 (73%)，氦 (25%)，其他元素 (2%)",
        name: function() { return getText('sun'); },
        type: function() { return currentLanguage === 'zh-CN' ? "恒星" : "Star"; },
        description: function() { 
            return currentLanguage === 'zh-CN' 
                ? "太阳是我们太阳系中心的恒星，包含了太阳系99.8%的质量。它主要由氢和氦组成，通过核聚变反应释放能量。" 
                : "The Sun is the star at the center of our Solar System, containing 99.8% of the system's mass. It is primarily composed of hydrogen and helium, and releases energy through nuclear fusion.";
        },
        diameter: function() { 
            return currentLanguage === 'zh-CN' ? "1,392,700 公里" : "1,392,700 km"; 
        },
        temperature: function() { 
            return currentLanguage === 'zh-CN' ? "5,500°C (表面)" : "5,500°C (surface)"; 
        },
        rotation: function() { 
            return currentLanguage === 'zh-CN' 
                ? "25-35 天 (随纬度不同而变化)" 
                : "25-35 days (varies by latitude)"; 
        },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "太阳的核心温度约为1,500万摄氏度。每秒钟，太阳将约420万吨物质转化为能量。" 
                : "The Sun's core temperature is about 15 million degrees Celsius. Every second, the Sun converts about 4.2 million tons of matter into energy."; 
        }
    },
    mercury: {
        englishName: "Mercury",
        mass: "3.3 × 10^23 千克",
        gravity: "3.7 m/s²",
        distanceFromSun: "5,790万公里",
        name: function() { return getText('mercury'); },
        type: function() { return currentLanguage === 'zh-CN' ? "岩质行星" : "Terrestrial Planet"; },
        description: function() { 
            return currentLanguage === 'zh-CN' 
                ? "水星是太阳系中最小且最靠近太阳的行星，它的表面布满了陨石坑。" 
                : "Mercury is the smallest and closest planet to the Sun in the Solar System, with a surface covered in impact craters."; 
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "4,879 公里" : "4,879 km"; },
        temperature: function() { return currentLanguage === 'zh-CN' ? "-173°C 至 427°C" : "-173°C to 427°C"; },
        orbit: function() { return currentLanguage === 'zh-CN' ? "88 天" : "88 days"; },
        rotation: function() { return currentLanguage === 'zh-CN' ? "58.6 天" : "58.6 days"; },
        moons: function() { return "0"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "水星的一天（自转周期）相当于地球的58.6天，而一年（公转周期）只有88个地球日。水星表面温差极大，白天可达427°C，夜间可低至-173°C。" 
                : "Mercury's day (rotation period) is equivalent to 58.6 Earth days, while its year (orbit period) is only 88 Earth days. Mercury has extreme surface temperatures, reaching 427°C during the day and dropping to -173°C at night."; 
        }
    },
    venus: {
        englishName: "Venus",
        mass: "4.87 × 10^24 千克",
        gravity: "8.9 m/s²",
        temperature: "464°C (平均)",
        orbit: "224.7 天",
        rotation: "243 天 (逆向旋转)",
        distanceFromSun: "1.082亿公里",
        moons: "0",
        atmosphere: "二氧化碳 (96%), 氮气 (3.5%)",
        name: function() { return getText('venus'); },
        type: function() { return currentLanguage === 'zh-CN' ? "岩质行星" : "Terrestrial Planet"; },
        description: function() { 
            return currentLanguage === 'zh-CN' 
                ? "金星是太阳系中第二颗行星，也是除了太阳和月亮外，天空中最亮的自然物体。" 
                : "Venus is the second planet from the Sun, and the brightest natural object in the sky after the Sun and Moon."; 
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "12,104 公里" : "12,104 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "金星是太阳系中最热的行星，表面温度高达464°C，足以熔化铅。它的自转方向与其他行星相反，并且自转非常缓慢，一个金星日长于一个金星年。" 
                : "Venus is the hottest planet in the Solar System, with a surface temperature of 464°C, hot enough to melt lead. It rotates in the opposite direction to most planets and very slowly, so a Venus day is longer than a Venus year."; 
        }
    },
    earth: {
        englishName: "Earth",
        mass: "5.97 × 10^24 千克",
        gravity: "9.8 m/s²",
        temperature: "15°C (平均)",
        orbit: "365.25 天",
        rotation: "23.9 小时",
        distanceFromSun: "1.496亿公里",
        moons: "1 (月球)",
        atmosphere: "氮气 (78%), 氧气 (21%), 其他气体 (1%)",
        name: function() { return getText('earth'); },
        type: function() { return currentLanguage === 'zh-CN' ? "岩质行星" : "Terrestrial Planet"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "地球是太阳系中第三颗行星，也是目前唯一已知存在生命的天体。"
                : "Earth is the third planet from the Sun and the only known celestial body to harbor life.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "12,756 公里" : "12,756 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "地球表面约71%被水覆盖。地球是太阳系中唯一已知有液态水存在的行星，也是唯一已知有生命存在的天体。" 
                : "About 71% of Earth's surface is covered by water. Earth is the only planet in the Solar System known to have liquid water on its surface and the only one known to harbor life."; 
        }
    },
    mars: {
        englishName: "Mars",
        mass: "6.42 × 10^23 千克",
        gravity: "3.7 m/s²",
        temperature: "-65°C (平均)",
        orbit: "687 天",
        rotation: "24.6 小时",
        distanceFromSun: "2.28亿公里",
        moons: "2 (火卫一和火卫二)",
        atmosphere: "二氧化碳 (95%), 氮气 (3%), 氩气 (1.6%)",
        name: function() { return getText('mars'); },
        type: function() { return currentLanguage === 'zh-CN' ? "岩质行星" : "Terrestrial Planet"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "火星是太阳系中第四颗行星，常被称为'红色星球'，因其表面富含氧化铁，呈现红色。"
                : "Mars is the fourth planet from the Sun, often called the 'Red Planet' due to its reddish appearance caused by iron oxide on its surface.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "6,792 公里" : "6,792 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "火星拥有太阳系中最高的山脉奥林匹斯山，高度约为21.9公里。火星上有证据表明过去曾经有液态水流动，科学家正在寻找火星上生命的痕迹。" 
                : "Mars has the highest mountain in the Solar System, Olympus Mons, standing about 21.9 km tall. There is evidence that liquid water once flowed on Mars, and scientists are searching for signs of life on the planet."; 
        }
    },
    jupiter: {
        englishName: "Jupiter",
        mass: "1.898 × 10^27 千克",
        gravity: "23.1 m/s²",
        temperature: "-110°C (云顶)",
        orbit: "11.9 年",
        rotation: "9.9 小时",
        distanceFromSun: "7.785亿公里",
        moons: "95+",
        composition: "氢 (90%), 氦 (10%), 微量其他元素",
        name: function() { return getText('jupiter'); },
        type: function() { return currentLanguage === 'zh-CN' ? "气态巨行星" : "Gas Giant"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "木星是太阳系中最大的行星，它的质量是太阳系所有其他行星总和的2.5倍。"
                : "Jupiter is the largest planet in the Solar System, with a mass 2.5 times that of all the other planets combined.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "142,984 公里" : "142,984 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "木星有一个著名的大红斑，这是一个持续了至少400年的巨大风暴系统，大小足以容纳2-3个地球。木星的自转速度非常快，是太阳系中自转最快的行星，一天只有约10小时。" 
                : "Jupiter has a famous Great Red Spot, a giant storm system that has lasted for at least 400 years and is large enough to contain 2-3 Earths. Jupiter rotates very quickly, with a day of only about 10 hours, making it the fastest rotating planet in the Solar System."; 
        }
    },
    saturn: {
        englishName: "Saturn",
        mass: "5.68 × 10^26 千克",
        gravity: "9.0 m/s²",
        temperature: "-140°C (云顶)",
        orbit: "29.5 年",
        rotation: "10.7 小时",
        distanceFromSun: "14.32亿公里",
        moons: "274+",
        composition: "氢 (96%), 氦 (3%), 微量其他元素",
        name: function() { return getText('saturn'); },
        type: function() { return currentLanguage === 'zh-CN' ? "气态巨行星" : "Gas Giant"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "土星是太阳系中第六颗行星，以其壮观的环系统而闻名。"
                : "Saturn is the sixth planet from the Sun, known for its spectacular ring system.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "120,536 公里" : "120,536 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "土星的环系统主要由冰粒子和少量岩石碎片组成，直径可达数米。土星的密度非常低，如果有一个足够大的水池，土星会浮在水面上。土星拥有太阳系中最多的卫星，已知超过274个。" 
                : "Saturn's ring system is composed mostly of ice particles with a smaller amount of rocky debris, ranging in size up to several meters. Saturn has such low density that it would float in water if there were a pool large enough. Saturn has the most moons in the Solar System, with over 274 known satellites."; 
        }
    },
    uranus: {
        englishName: "Uranus",
        mass: "8.68 × 10^25 千克",
        gravity: "8.7 m/s²",
        temperature: "-195°C (云顶)",
        orbit: "84 年",
        rotation: "17.2 小时 (逆向旋转)",
        distanceFromSun: "28.7亿公里",
        moons: "28",
        composition: "氢 (83%), 氦 (15%), 甲烷 (2%)",
        name: function() { return getText('uranus'); },
        type: function() { return currentLanguage === 'zh-CN' ? "冰巨行星" : "Ice Giant"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "天王星是太阳系中第七颗行星，它的独特之处在于它的自转轴几乎与轨道平面平行。"
                : "Uranus is the seventh planet from the Sun, unique because its rotation axis is nearly parallel to its orbital plane.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "51,118 公里" : "51,118 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "天王星的自转轴几乎与其轨道平面垂直，倾斜角度为98度，这使得它看起来像是侧躺着公转。天王星的大气中含有甲烷，使其呈现出独特的蓝绿色。" 
                : "Uranus's axis of rotation is tilted sideways, nearly perpendicular to its orbital plane, with a tilt of 98 degrees. This gives it seasons that are completely different from those on Earth. Uranus gets its blue-green color from methane in its atmosphere."; 
        }
    },
    neptune: {
        englishName: "Neptune",
        mass: "1.02 × 10^26 千克",
        gravity: "11.0 m/s²",
        temperature: "-200°C (云顶)",
        orbit: "165 年",
        rotation: "16.1 小时",
        distanceFromSun: "45.15亿公里",
        moons: "16",
        composition: "氢 (80%), 氦 (19%), 甲烷 (1%)",
        name: function() { return getText('neptune'); },
        type: function() { return currentLanguage === 'zh-CN' ? "冰巨行星" : "Ice Giant"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "海王星是太阳系中第八颗也是最远的行星，它是通过数学计算而非直接观测被发现的第一颗行星。"
                : "Neptune is the eighth and farthest planet from the Sun, and the first planet discovered through mathematical calculations rather than direct observation.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "49,528 公里" : "49,528 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "海王星拥有太阳系中最强的风，风速可达每小时2,100公里。海王星表面有一个称为\"大黑斑\"的巨大风暴系统，类似于木星的大红斑，但后来已经消失。" 
                : "Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h. Neptune had a Giant Dark Spot, a storm system similar to Jupiter's Great Red Spot, which has since disappeared."; 
        }
    },
    moon: {
        englishName: "Moon",
        mass: "7.3 × 10^22 千克",
        gravity: "1.6 m/s²",
        temperature: "-233°C 至 123°C",
        orbit: "27.3 天 (绕地球)",
        rotation: "27.3 天 (同步自转)",
        distanceFromEarth: "384,400 公里 (平均)",
        name: function() { return getText('moon'); },
        type: function() { return currentLanguage === 'zh-CN' ? "卫星" : "Satellite"; },
        description: function() {
            return currentLanguage === 'zh-CN'
                ? "月球是地球唯一的天然卫星，也是太阳系中第五大卫星。"
                : "The Moon is Earth's only natural satellite and the fifth largest satellite in the Solar System.";
        },
        diameter: function() { return currentLanguage === 'zh-CN' ? "3,475 公里" : "3,475 km"; },
        facts: function() { 
            return currentLanguage === 'zh-CN' 
                ? "月球的自转周期与公转周期相同，这就是为什么从地球上总是能看到月球的同一面。月球上没有大气层，因此没有风化作用，宇航员在月球上的脚印可以保持数百万年不变。人类首次登月是在1969年7月20日，宇航员尼尔·阿姆斯特朗成为第一个踏上月球的人。" 
                : "The Moon's rotation period is the same as its orbital period around Earth, which is why we always see the same face of the Moon. The Moon has no atmosphere, so there is no erosion, meaning that astronaut footprints on the Moon could remain for millions of years. The first human to set foot on the Moon was Neil Armstrong on July 20, 1969."; 
        }
    }
};

// 导出行星数据供其他文件使用
window.PLANET_DATA = PLANET_DATA; 