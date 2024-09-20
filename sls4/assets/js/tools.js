function getIdForString(inputString, totalIds ) {
  let sum = 0;
  // 遍历字符串中的每个字符，计算字符的 Unicode 编码值总和
  for (let i = 0; i < inputString.length; i++) {
      sum += inputString.charCodeAt(i);
  }
  // 对总和进行取模运算，得到稳定的唯一ID
  const uniqueId = sum % totalIds;
  return uniqueId;
}


function getTopLevelDomain() {
  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");

  if (domainParts.length > 2) {
    return domainParts.slice(-2).join(".");
  } else {
    return hostname;
  }
}

async function getAllRootColorKeyWords() {
  async function getAllCssRules(stylesheet) {
    const rules = [];

    try {
      const cssRules = stylesheet.cssRules || stylesheet.rules;

      for (let rule of cssRules) {
        if (rule.type === CSSRule.IMPORT_RULE && rule.styleSheet) {
          // Recursively get rules from imported stylesheets
          rules.push(...(await getAllCssRules(rule.styleSheet)));
        } else if (rule.type === CSSRule.STYLE_RULE) {
          rules.push(rule);
        }
      }
    } catch (e) {
      console.warn("Cannot access stylesheet: ", stylesheet.href);
    }

    return rules;
  }

  async function getCustomRootSelectors() {
    const stylesheets = document.styleSheets;
    const selectors = [];

    for (let stylesheet of stylesheets) {
      const rules = await getAllCssRules(stylesheet);

      for (let rule of rules) {
        const selector = rule.selectorText;

        if (
          selector &&
          selector.startsWith(":root[") &&
          selector.endsWith("]")
        ) {
          const keyword = selector.slice(6, -1); // Get the keyword inside :root[...]
          selectors.push(keyword);
        }
      }
    }

    return selectors;
  }
  const customKeywords = await getCustomRootSelectors();
  return customKeywords;
}

// 示例 <img class="lazy" data-src="${item.thumb}" src="assets/placeholder.svg"  alt="" />
function imgLazyLoad() {


  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImage.classList.add("loaded");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      },
      {
        rootMargin: "0px 0px 200% 0px", // 设置监听范围为视口高度的两倍
      }
    );

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}
export {
  getIdForString,
  getTopLevelDomain,
  getAllRootColorKeyWords,
  imgLazyLoad,
};
