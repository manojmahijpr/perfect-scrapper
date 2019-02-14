const Naming = {

    getPageName(routeName) {
        
        
        switch (routeName) {
            case "/tech":
                return "Technological Trends";        
            case "/social":
                return "Social Trends";
            case "/ecommerce":
                return "E-Commerce Product Trends";        
            case "/search-trends":
                return "Search Trends";
            case "/entertain":
                return "Youtube, Musixmatch & Games...";
            default:
                return "Perfect Scrapper";
        }

        
        
    }

}


module.exports = {
    Naming
}