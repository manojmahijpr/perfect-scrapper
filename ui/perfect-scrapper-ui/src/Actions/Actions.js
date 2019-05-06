const Naming = {

    getPageName(routeName) {
        
        switch (routeName) {
            case "/tech":
                return "Programming Trends";        
            case "/social":
                return "Social Trends";
            case "/ecommerce":
                return "E-Commerce Product Trends";        
            case "/search-trends":
                return "Search Trends";
            case "/entertain":
                return "Youtube, Musixmatch & Games...";
            case "/india-trends":
                return "India Trending Topics";
            case "/global-trends":
                return "Global Top Headlines";
            case "/tech-trends":
                return "Technological News";
            default:
                return "Perfect Scrapper";
        }
    }
}

const repository = {
    
    githubData: [],
    stackoverflowData: [],
    
    twitterData: [],
    reditData: [],
    
    youtubeData: [],
    musixMatchData: [],
    
    theHinduData: [],
    theTOIData: [],
    googleNews: [],
    
    bbcData: [],
    washingtonData: [],
    wsjData: [],

    techCrunch: [],
    theVerge: [],
    theNextWeb:[],
}

function exportData(exportObj){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "Sample.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


module.exports = {
    Naming,
    repository,
    exportData
}