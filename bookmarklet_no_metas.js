javascript:(function() {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('page_type', 'no_metas'); // Set page_type to no_metas
    window.location.href = currentUrl.href; // Redirect to the updated URL in the same tab
})();
