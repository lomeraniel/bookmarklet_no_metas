# No Metas Bookmarklet

## Description

The No Metas Bookmarklet is a simple tool to navigate directly to a `page_type=no_metas` view for Parse.ly dashboards. This view highlights pages that are missing metadata, helping you identify and resolve issues quickly.

## How It Works

The bookmarklet works on Parse.ly dashboard URLs. When you click it, it modifies the current dashboard URL to display pages with `page_type=no_metas`. If you’re not currently on a valid Parse.ly dashboard page, it won’t perform any action.

## Installation

### Option 1: Regular Version
1. Copy the code below:

```
javascript:(function() {
    const currentUrl = window.location.href;
    if (currentUrl.includes("beta.parsely.com") && currentUrl.includes("posts")) {
        const newUrl = currentUrl.replace(/page_type=[^&]*/, "page_type=no_metas");
        const finalUrl = newUrl.includes("page_type=") ? newUrl : `${newUrl}&page_type=no_metas`;
        window.location.href = finalUrl;
    } else {
        alert("This bookmarklet only works on Parse.ly dashboard post pages.");
    }
})();
```

2. Create a new bookmark in your browser.
3. Paste the code into the URL or Location field of the bookmark.
4. Save the bookmark.

### Option 2: Encoded Version
 1.	Use the encoded version for direct pasting into a bookmark’s URL field:

```
javascript:(function()%7Bconst%20currentUrl%20%3D%20window.location.href%3Bif%20(currentUrl.includes(%22beta.parsely.com%22)%20%26%26%20currentUrl.includes(%22posts%22))%20%7Bconst%20newUrl%20%3D%20currentUrl.replace(%2Fpage_type%3D%5B%5E%26%5D*%2F%2C%20%22page_type%3Dno_metas%22)%3Bconst%20finalUrl%20%3D%20newUrl.includes(%22page_type%3D%22)%20%3F%20newUrl%20%3A%20%60%24%7BnewUrl%7D%26page_type%3Dno_metas%60%3Bwindow.location.href%20%3D%20finalUrl%3B%7D%20else%20%7Balert(%22This%20bookmarklet%20only%20works%20on%20Parse.ly%20dashboard%20post%20pages.%22)%3B%7D%7D)()
```

## Usage
1. Open any Parse.ly dashboard page (e.g., https://beta.parsely.com/<your-site>/posts/?page_type=any).
2. Click the bookmarklet in your browser’s bookmarks bar.
3. The page will reload with `page_type=no_metas`, showing pages missing metadata.

## Notes
- The bookmarklet only works on valid Parse.ly dashboard URLs.

## Troubleshooting

If the bookmarklet isn’t working:
	1.	Make sure you’re on a Parse.ly dashboard post page (e.g., https://beta.parsely.com/<your-site>/posts).
	2.	Ensure the bookmarklet code is correctly added to your browser’s bookmarks.
	3.	Reload the page and try again.

Feel free to share or modify the code for your needs.
