import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
      articles = [
        {
          source: { id: "handelsblatt", name: "Handelsblatt" },
          author: "Thomas Jahn, Alexander Möthe",
          title: "Gamescom 2023: So verändert KI die Spielregeln im Gaming",
          description:
            "Schnellere Entwicklung, bessere Charaktere und weniger Aufwand: Künstliche Intelligenz vereinfacht die Entwicklung neuer Computerspiele. Das könnte vor allem kleinen Studios helfen.",
          url: "https://www.handelsblatt.com/technik/ki/gamescom-2023-so-veraendert-ki-die-spielregeln-im-gaming/29347356.html",
          urlToImage:
            "https://www.handelsblatt.com/images/eroeffnungstag-der-gamescom-in-koeln/29348988/2-format2003.jpg",
          publishedAt: "2023-08-24T07:48:51+00:00",
          content:
            "Düsseldorf, Köln Das Vorhaben von Klang Games ist ehrgeizig: eine virtuelle Welt für Millionen Spieler bauen. Das Ziel des Spiels Seed: den Planeten Avesta zu besiedeln. Es läuft rund um die Uhr, auc… [+7080 chars]",
        },
        {
          source: { id: "independent", name: "Independent" },
          author: "Kate Ng",
          title:
            "Prince Harry to return to UK on eve of Queen’s death anniversary for charity event",
          description:
            "The Duke of Sussex is set to fly to Dusseldorf for his Invictus Games shortly after",
          url: "http://www.independent.co.uk/life-style/royal-family/prince-harry-queen-death-anniversary-b2398510.html",
          urlToImage:
            "https://static.independent.co.uk/2023/08/16/16/GettyImages-1315951372.jpg?quality=75&width=1200&auto=webp",
          publishedAt: "2023-08-24T06:40:45Z",
          content:
            "Stay ahead of the trend in fashion and beyond with our free weekly Lifestyle Edit newsletter\r\nStay ahead of the trend in fashion and beyond with our free weekly Lifestyle Edit newsletter \r\nThe Duke o… [+3208 chars]",
        },
        {
          source: { id: "polygon", name: "Polygon" },
          author: "Oli Welsh",
          title: "Broken Sword 6 announced, plus 4K remaster of Broken Sword 1",
          description:
            "Revolution Software’s point-and-click games return on PC, console, and mobile, with sixth adventure Parzival’s Stone and new version of Shadow of the Templars.",
          url: "https://www.polygon.com/23838090/broken-sword-6-bs1-remaster-trailer-release-date",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/uhKa-RDNVuQX5HZrDt5xEw6uWbs=/0x339:6788x3893/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24860199/Clown_Poster.jpg",
          publishedAt: "2023-08-23T15:52:01Z",
          content:
            "Charles Cecils point-and-click games return after a decade away",
        },
        {
          source: { id: "t3n", name: "T3n" },
          author: "Matthias Kreienbrink",
          title:
            "Job in der Games-Branche: Experten erklären, wie du vom Gamer zum Angestellten wirst",
          description:
            "Gut in einem Videospiel zu sein, was ist das schon wert? ­Mitunter einen Job in ­einem Gaming-Studio. Denn ­Co",
          url: "https://t3n.de/magazin/community-recruiting-games-branche-gamer-251965/",
          urlToImage:
            "https://t3n.de/magazin/wp-content/uploads/2023/03/Community_Recruiting_Disccord-Chatverlauf_Yager.jpg",
          publishedAt: "2023-08-23T15:30:00Z",
          content:
            "Zunächst war Danny Schenk nur ein guter Spieler. Er hat den Entwicklern Feedback zu ihrem Spiel gegeben. Sie auf Fehler hingewiesen und ihnen Vorschläge gemacht, welche neuen Features dem Produkt gut… [+13472 chars]",
        },
        {
          source: { id: "polygon", name: "Polygon" },
          author: "Toussaint Egan",
          title:
            "Here are all the overhauls Phantom Liberty will bring to Cyberpunk 2077",
          description:
            "CD Projekt Red unveiled a new trailer for Cyberpunk 2077: Phantom Liberty this tuesday at Gamescom 2023, focusing on the expansion’s overhauled systems.",
          url: "https://www.polygon.com/23842063/cyberpunk-2077-phantom-liberty-gamescom-trailer-update-2-0",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/QOtvm4D_wh0nH5nXVNYS1iZackQ=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24866847/ss_7bbae8adf0c05471dfea2ebb1dc2611ee0f72835.1920x1080.jpg",
          publishedAt: "2023-08-22T21:10:00Z",
          content: "Upgrade your grey matter, cause one day it may matter",
        },
        {
          source: { id: "polygon", name: "Polygon" },
          author: "Joshua Rivera",
          title:
            "All Gamescom ONL 2023 announcements and trailers in one place",
          description:
            "Diablo 4’s new season, Alan Wake 2, the Cyberpunk 2077 DLC, and Little Nightmares 3 are the highlights of this year’s showcase",
          url: "https://www.polygon.com/2023/8/22/23841795/gamescom-announcements-trailers-onl-2023",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/UYYkAJpuwCx_hwPUfIan8K7MrHc=/0x0:3274x1714/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24866887/cyberpunk_cybernetics.jpg",
          publishedAt: "2023-08-22T20:58:10Z",
          content:
            "In whats become an end-of-summer bookend on the game release calendar, Gamescoms Opening Night Live showcase is once again here to highlight games coming your way in the near future. Hosted by Geoff … [+7185 chars]",
        },
        {
          source: { id: "polygon", name: "Polygon" },
          author: "Cass Marshall",
          title: "Crimson Desert looks like every RPG crammed into one",
          description:
            "Crimson Desert’s new trailer at Gamescom 2023 showed off a dizzying array of features, including ones that seem to be borrowed from Elden Ring, Tears of the Kingdom, and other open-world RPGs.",
          url: "https://www.polygon.com/23842006/crimson-desert-gamescom-2023-trailer-combat-exploration-magic",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/YAmZu9nxCXNiUOkHxipEdcR88cU=/0x38:1920x1043/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24866853/crimsondesert.png",
          publishedAt: "2023-08-22T20:50:08Z",
          content:
            "Turn into crows, go fishing, and take a hot air balloon ride",
        },
        {
          source: { id: "usa-today", name: "USA Today" },
          author: null,
          title: "Games USA Today",
          description:
            "Play addicting word games on USA TODAY. Word games so tricky they can stump the dictionary.",
          url: "https://games.usatoday.com/category/word",
          urlToImage:
            "https://games.usatoday.com/arenaxstorage-blob/arenax-index/_arena-shared-content_/social/600315.jpg",
          publishedAt: "2023-04-06T20:37:54+00:00",
          content:
            "Play addicting word games on USA TODAY. Word games so tricky they can stump the dictionary.",
        },
        {
          source: { id: "espn-cric-info", name: "ESPN Cric Info" },
          author: null,
          title:
            "Five CSK games only hardcore fans will remember | ESPNcricinfo.com",
          description:
            "From throwing a surprise in the batting order to smashing sixes after sixes, CSK have done it all | ESPNcricinfo.com",
          url: "http://www.espncricinfo.com/story/_/id/28974528/five-csk-games-only-hardcore-fans-remember",
          urlToImage:
            "https://a2.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219712_1296x729.jpg",
          publishedAt: "2020-03-31T10:23:03Z",
          content:
            "If you're a Chennai Super Kings supporter, you'll remember MS Dhoni's sensational 29-ball 54 not out against Kings XI Punjab in Dharamsala in 2010 and that rare, pumped-up celebration where he jabbed… [+4410 chars]",
        },
        {
          source: { id: "the-sport-bible", name: "The Sport Bible" },
          author: "Ryan Sidle",
          title: "Bury FC Have Been Expelled From The EFL",
          description:
            "The League One side have had all of their games suspended up to now but have no failed to meet a second deadline to sell the club.",
          url: "http://www.thesportbible.com/football/news-bury-fc-have-been-expelled-from-the-efl-20190827",
          urlToImage:
            "http://beta.ems.ladbiblegroup.com/s3/content/808x455/0bb079b75d654f14eec508e0ffc957eb.png",
          publishedAt: "2019-08-27T22:16:21Z",
          content:
            "League One club Bury FC have been hit with the devastating news that their EFL membership has been withdrawn after owner Steve Dale failed to find a buyer for the club buy the 5pm deadline on Tuesday… [+2924 chars]",
        },
      ];
    
  
  constructor() {
    super();
    console.log("constructor calling");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2>Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0,45)}
                    description={element.description.slice(0,88)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
