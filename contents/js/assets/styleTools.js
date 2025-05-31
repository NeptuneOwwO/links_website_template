function applyFirstTheme(theme) {
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = getCookie("theme");

    console.log("Dark theme media quary:", darkThemeMediaQuery.matches);

    if (savedTheme) {
        if (savedTheme === "dark") {
            loadThemeConfig(theme.darkTheme ? theme : theme.opposite);
            document.body.classList.add("dark-theme");
        } else {
            loadThemeConfig(theme.darkTheme ? theme.opposite : theme);
        }
    } else {
        if (darkThemeMediaQuery.matches) {
            if (theme.darkTheme) {
                loadThemeConfig(theme);
            } else {
                loadThemeConfig(theme.opposite);
                document.body.classList.add("dark-theme");
            }
        } else {
            if (theme.darkTheme) {
                loadThemeConfig(theme.opposite);
                document.body.classList.add("dark-theme");
            } else {
                loadThemeConfig(theme);
            }
        }
    }
}

function setIconBasedOnTheme(theme) {
    const iconElement = document.getElementById("theme-icon");
    if (document.body.classList.contains("dark-theme") || theme.darkTheme) {
        iconElement.name = "moon-outline";
    } else {
        iconElement.name = "sunny-outline";
    }
}

function loadThemeConfig(theme) {
    applyTheme(theme);
    setIconBasedOnTheme(theme);
}

function toggleTheme(theme) {
    const currentTheme = document.body.classList.contains("dark-theme") ? theme : theme.opposite;
    document.body.classList.toggle("dark-theme");
    applyTheme(currentTheme);
    setIconBasedOnTheme(currentTheme);
    setCookie("theme", document.body.classList.contains("dark-theme") ? "dark" : "light", 365);
}

function createToggleThemeButton(theme) {
    const button = document.createElement("button");
    button.className = "theme-toggle-button";
    const icon = document.createElement("ion-icon");
    icon.id = "theme-icon";
    icon.name = theme.darkTheme ? "moon-outline" : "sunny-outline";
    button.appendChild(icon);
    
    button.addEventListener("click", () => toggleTheme(theme));

    const article = document.getElementById("profile-article");
    article.appendChild(button);

    if (!theme) {
        button.style.display = "none";
    }
}

function applyTheme(theme) {
    const article = document.getElementById("profile-article");
    article.style.background = theme.background;
    article.style.color = theme.textColor;
    document.querySelectorAll(".discord-box").forEach(box => {
        box.style.backgroundColor = theme.buttonBackground;
        box.style.color = theme.buttonTextColor;
    });
    document.querySelectorAll(".discord-box").forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = theme.buttonHoverBackground;
            box.style.boxShadow = "0 0 50px " + theme.buttonHoverBackground;
        });
        box.addEventListener("mouseout", () => {
            box.style.backgroundColor = theme.buttonBackground;
            box.style.boxShadow = "none";
        });
    });
    if (profileData.buttonThemeEnable !== 1) {
        document.querySelectorAll("a").forEach(link => {
            link.style.color = theme.textColor;
        });
        document.querySelectorAll("a:hover").forEach(link => {
            link.style.color = theme.linkHoverColor;
        });
    }
    const emailDiv = document.querySelector(".email");
    const emailHover = document.querySelector(".email a");
    emailDiv.style.backgroundColor = theme.buttonBackground;
    emailDiv.style.color = theme.buttonTextColor;

    emailHover.addEventListener("mouseover", () => {
        emailDiv.style.backgroundColor = theme.buttonHoverBackground;
        emailDiv.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
        emailHover.style.color = theme.buttonTextColor;
    });
    emailHover.addEventListener("mouseout", () => {
        emailDiv.style.backgroundColor = theme.buttonBackground;
        emailDiv.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
        emailHover.style.color = theme.textColor;
    });

    const themeToggle = document.querySelector(".theme-toggle-button");
    themeToggle.style.backgroundColor = theme.buttonBackground;
    themeToggle.style.color = theme.textColor;
    themeToggle.tabIndex = 1;

    themeToggle.addEventListener("mouseover", () => {
        themeToggle.style.backgroundColor = theme.buttonHoverBackground;
        themeToggle.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
    });
    themeToggle.addEventListener("mouseout", () => {
        themeToggle.style.backgroundColor = theme.buttonBackground;
        themeToggle.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
    });

    // Apply the new property articleHoverBoxShadow
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        article:hover {
            box-shadow: ${theme.articleHoverBoxShadow};
        }
    `, styleSheet.cssRules.length);

    // Apply scrollbar styles
    styleSheet.insertRule(`
        ::-webkit-scrollbar {
            width: 12px;
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        ::-webkit-scrollbar-track {
            background: ${theme.background};
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(45deg, ${theme.buttonBackground}, ${theme.buttonHoverBackground});
            border-radius: 10px;
            border: 3px solid ${theme.background};
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
        }
    `, styleSheet.cssRules.length);
    styleSheet.insertRule(`
        ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(45deg, ${theme.buttonHoverBackground}, ${theme.buttonBackground});
        }
    `, styleSheet.cssRules.length);

    const easterEggsBtn = document.querySelector(".easter-egg-gear-btn");
    const easterEggsModal = document.querySelector(".easter-egg-modal");

    if (easterEggsBtn) {
        easterEggsBtn.style.backgroundColor = theme.buttonBackground;
        easterEggsBtn.style.color = theme.textColor;
        easterEggsBtn.addEventListener("mouseover", () => {
            if (easterEggsBtn) {
                easterEggsBtn.style.backgroundColor = theme.buttonHoverBackground;
                easterEggsBtn.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
            }
        });
        easterEggsBtn.addEventListener("mouseout", () => {
            if (easterEggsBtn) {
                easterEggsBtn.style.backgroundColor = theme.buttonBackground;
                easterEggsBtn.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
            }
        });
    } else {
        console.warn("Easter eggs button not found. Make sure it exists in your HTML.");
    }

    if (easterEggsModal) {
        easterEggsModal.style.background = theme.background;
        easterEggsModal.style.color = theme.textColor;
        easterEggsModal.style.border = `2px solid ${theme.buttonHoverBackground}`;
        easterEggsModal.style.boxShadow = `0 0 30px ${theme.buttonHoverBackground}`;
        easterEggsModal.style.borderRadius = "12px";
        easterEggsModal.style.padding = "24px";
        easterEggsModal.style.transition = "background 0.3s, color 0.3s, box-shadow 0.3s";
    } else {
        console.warn("Easter eggs modal not found. Make sure it exists in your HTML.");
    }

    // Appliquer le style à tous les boutons .show-desc-btn
    const boutonsAffichageDescription = document.querySelectorAll(".show-desc-btn");
    boutonsAffichageDescription.forEach(bouton => {
        bouton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        bouton.style.color = theme.textColor;
        bouton.addEventListener("mouseover", () => {
            bouton.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            bouton.style.boxShadow = `0 0 10px ${theme.buttonHoverBackground}`;
        });
        bouton.addEventListener("mouseout", () => {
            bouton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            bouton.style.boxShadow = `0 0 10px ${theme.buttonBackground}`;
        });
    });
    
}

function setBackgroundStyles(profileData) {
    if (Array.isArray(profileData.background)) {
        document.body.style.background = `linear-gradient(${profileData.degBackgroundColor}deg, ${profileData.background.join(", ")})`;
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.background = `url(${profileData.background})`;
        document.body.style.backgroundSize = `${profileData.backgroundSize}%`;
    }
}

function applyAnimation(animation, animationEnabled) {
    const article = document.getElementById("profile-article");
    if (animationEnabled) {
        article.style.animation = animation.keyframes;
    }
}

function applyAnimationButton(animation, animationButtonEnabled, delayAnimationButton) {
    const articleChildren = document.querySelectorAll("#profile-article > *:not(.easter-egg-modal)");
    if (animationButtonEnabled) {
        articleChildren.forEach((child, index) => {
            child.style.animationDelay = `${(index + 1) * delayAnimationButton}s`;
            child.style.animation = `${animation.keyframes} ${animation.duration || delayAnimationButton * index}s`;
            child.style.animationFillMode = "backwards";
        });
    }
}

function applyDynamicStyles(profileData, styleSheet, selectedAnimationBackgroundIndex, EnableAnimationBackground, animationDurationBackground, useCanvas, selectedCanvasIndex) {
    if (useCanvas) {
        const canvas = document.createElement("canvas");
        canvas.id = "backgroundCanvas";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.id = "container";

        try {
            const script = document.createElement("script");
            script.src = `./contents/js/canvaAnimation/${canvaData[selectedCanvasIndex].fileNames}`;
            document.body.appendChild(script);

            script.onload = () => {
                if (typeof runCanvasAnimation === "function") {
                    runCanvasAnimation(ctx, canvas);
                } else {
                    console.error("runCanvasAnimation is not a function");
                    setBackgroundStyles(profileData);
                }
            };
        } catch (error) {
            console.error("Error loading canvas animation:", error);
            setBackgroundStyles(profileData);
        }

    } else {
        setBackgroundStyles(profileData);
    }

    if (EnableAnimationBackground && !useCanvas && !Array.isArray(profileData.background)) {
        document.body.style.animation = `${animationBackground[selectedAnimationBackgroundIndex].keyframes} ${animationDurationBackground}s`;
    } else {
        document.body.style.animation = "none";
    }

    // Appliquer le neon si activé
    if (profileData.neonEnable === 0) {
        styleSheet.insertRule(`
            .profile-pic-wrapper::before,
            .profile-pic-wrapper::after {
                display: none;
            }
        `, styleSheet.cssRules.length);
    } else {
        const neonGradient = profileData.neonColors.join(", ");
        styleSheet.insertRule(`
            .profile-pic-wrapper::after, .profile-pic-wrapper::before {
                background: linear-gradient(45deg, ${neonGradient});
            }
        `, styleSheet.cssRules.length);
    }
}

function addEmailStyles() {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        .email {
            width: 100%;
            border: 2px solid ${themes[profileData.selectedThemeIndex % themes.length].buttonHoverBackground};
            border-radius: 10px;
            background-color: #2C2F33;
            color: white;
            font-size: 1em;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
    `, styleSheet.cssRules.length);

    styleSheet.insertRule(`
        .email a {
            display: block;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            color: white;
            border-radius: 10px;
        }
    `, styleSheet.cssRules.length);
    
}