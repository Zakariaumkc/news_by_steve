import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";
import {
  dailySalesChartAmazon,
  dailySalesChartApple,
  dailySalesChartAlphbet,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const watson_script =
  "window.watsonAssistantChatOptions = {" +
  "integrationID: 'c947c3a0-7a64-4fe7-841f-817ee2d4b2b7'," +
  "region: 'eu-gb'," +
  "serviceInstanceID: '0b081cf6-7d42-45fb-937f-c507cc976130'," +
  "onLoad: function(instance) { instance.render(); }" +
  "};" +
  "setTimeout(function(){" +
  "const t=document.createElement('script');" +
  "t.src='https://web-chat.global.assistant.watson.appdomain.cloud/versions/' + (window.watsonAssistantChatOptions.clientVersion || 'latest') + '/WatsonAssistantChatEntry.js';" +
  "document.head.appendChild(t);" +
  "});";

export default function Dashboard() {
  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const industry = params.get("industry");
  // const volatility = params.get("volatility");
  // const restriction = params.get("restriction");
  // const investment = params.get("investment");

  // const [data, setData] = React.useState(null);
  // fetching the GET route from the Express server which matches the GET route from server.js
  // const retrieveStockList = async () => {
  //   const stock_list_url ="/stock_list?industry="
  //     +industry+"&volatility="+volatility+"&restriction="+restriction;
  //   const stock_list_response = await fetch(stock_list_url);
  //   const body = await stock_list_response.json();

  //   if (stock_list_response.status !== 200) {
  //     throw Error(body.message);
  //   }

  //   return body;
  // };

  // fetching the GET route from the Express server which matches the GET route from server.js
  // const retrieveSentimentAnalysis = async () => {
  //   const sentiment_analysis_response = await fetch("/sentiment_analysis");
  //   const body = await sentiment_analysis_response.json();

  //   if (sentiment_analysis_response.status !== 200) {
  //     throw Error(body.message);
  //   }

  //   return body;
  // };

  // fetching the GET route from the Express server which matches the GET route from server.js
  // const retrieveTimeSeriesForcast = async () => {
  //   const time_series_forecast_response = await fetch("/time_series_forecast");
  //   const body = await time_series_forecast_response.json();

  //   if (time_series_forecast_response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };

  // React.useEffect(() => {
  //   retrieveStockList()
  //     .then((res) => {
  //       setData(res.express);
  //       console.log(res.express);
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));

  //   retrieveSentimentAnalysis()
  //     .then((res) => {
  //       setData(res.express);
  //       console.log(res.express);
  //     })
  //     .catch((err) => console.log(err));

  //   retrieveTimeSeriesForcast()
  //     .then((res) => {
  //       setData(res.express);
  //       console.log(res.express);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  React.useEffect(() => {
    var script = document.createElement("script");
    script.innerHTML = watson_script;
    document.body.appendChild(script);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <h3 className={classes.cardTitle}>Business</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
     <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>US consumer confidence up</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nConsumers\' confidence in the state of the US economy is at its highest for five months and they are optimistic about 2005, an influential survey says.\n\nThe feel-good factor among US consumers rose in December for the first time since July according to new data. The Conference Board survey of 5,000 households pointed to renewed optimism about job creation and economic growth. US retailers have reported strong sales over the past 10 days after a slow start to the crucial festive season.\n\nAccording to figures also released on Tuesday, sales in shopping malls in the week to 25 December were 4.3% higher than in 2003 following a last minute rush. Wal-Mart, the largest US retailer, has said its December sales are expected to be better than previously forecast because of strong post-Christmas sales.\n\nIt is expecting annual sales growth of between 1% and 3% for the month. Consumer confidence figures are considered a key economic indicator because consumer spending accounts for about two thirds of all economic activity in the United States. \"The continuing economic expansion, combined with job growth, has consumers ending this year on a high note,\" said Lynn Franco, director of the Conference Board\'s consumer research centre. \"And consumers\' outlook suggests that the economy will continue to expand in the first half of next year.\" The overall US economy has performed strongly in recent months, prompting the Federal Reserve to increase interest rates five times since June.\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>The 'ticking budget' facing the US</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nThe budget proposals laid out by the administration of US President George W Bush are highly controversial. The Washington-based Economic Policy Institute, which tends to be critical of the President, looks at possible fault lines. US politicians and citizens of all political persuasions are in for a dose of shock therapy. Without major changes in current policies and political prejudices, the federal budget simply cannot hold together. News coverage of the Bush budget will be dominated by debates about spending cuts, but the fact is these will be large cuts in small programs. From the standpoint of the big fiscal trends, the cuts are gratuitous and the big budget train wreck is yet to come. Under direct threat will be the federal government\'s ability to make good on its debts to the Social Security Trust Fund. As soon as 2018, the fund will begin to require some cash returns on its bond holdings in order to finance all promised benefits.\n\nThe trigger for the coming shock will be rising federal debt, which will grow in 10 years, by conservative estimates, to more than half the nation\'s total annual output.\n\nThis upward trend will force increased borrowing by the federal government, putting upward pressure on interest rates faced by consumers and business. Even now, a growing share of US borrowing is from abroad. The US Government cannot finance its operations without heavy borrowing from the central banks of Japan and China, among other nations. This does not bode well for US influence in the world. The decline of the dollar is a warning sign that current economic trends cannot continue. The dollar is already sinking. Before too long, credit markets are likely to react, and interest rates will creep upwards. That will be the shock.\n\nInterest-sensitive industries will feel pain immediately - sectors such as housing, automobiles, other consumer durables, agriculture, and small business. Some will recall the news footage of angry farmers driving their heavy equipment around the US Capitol in the late 1970s. There will be no need for constitutional amendments to balance the budget. The public outcry will force Congress to act. Whether it will act wisely is another matter. How did this happen?\n\nBy definition, the deficit means too little revenue and too much spending - but this neutral description doesn\'t adequately capture the current situation. Federal revenues are at 1950s levels, while spending remains where it has been in recent decades - much higher. In addition, the United States has two significant military missions. The Bush administration\'s chosen remedy is the least feasible one. Reducing domestic spending, or eliminating \"waste, fraud and abuse\" is toothless because this slice of the budget is too small to solve the problem. Indeed, if Congress were rash enough to balance the budget in this way, there would hardly be any such spending left. Law enforcement, space exploration, environmental clean-up, economic development, the Small Business Administration, housing, veterans\' benefits, aid to state and local governments would all but disappear. It\'s fantasy to think these routine government functions could be slashed. The biggest spending growth areas are defence (including homeland security), and health care for the elderly and the poor. To some extent, increases in these areas are inevitable. The US population is aging, and the nation does face genuine threats in the world. But serious savings can only be found where the big money is. Savings in health care spending that do not come at the expense of health can only be achieved with wholesale reform of the entire system, public and private. Brute force budget cuts or spending caps would ill-serve the nation\'s elderly and indigent.\n\nOn the revenue side, the lion\'s share of revenue lost to tax cuts enacted since 2000 will have to be replaced.\n\nSome rearranging could hold many people harmless and focus most of the pain on those with relatively high incomes. Finally, blind allegiance to a balanced budget will have to be abandoned. There is no good reason to fixate on it, anyway. Moderate deficits and slowly rising federal debt can be sustained indefinitely. Borrowing for investments in education and infrastructure that pay off in future years makes sense. The sooner we face that reality, the sooner workable reforms can be pursued. First on the list should be tax reform to raise revenue, simplify the tax code, and restore some fairness eroded by the Bush tax cuts. Second should be a dispassionate re-evaluation of the huge increase in defence spending over the past three years, much of it unrelated to Afghanistan, Iraq, or terrorism. Third must be the start of a serious debate on large-scale health care reform. One thing is certain - destroying the budget in order to save it is not going to equip the US economy and government for the challenges of this new century.\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Mitsubishi in Peugeot link talks</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nTrouble-hit Mitsubishi Motors is in talks with French carmaker PSA Peugeot Citroen about a possible alliance.\n\nOn Tuesday Mitsubishi, the only major Japanese car firm in the red, confirmed earlier reports of negotiations. But a spokesman refused to comment on speculation that Mitsubishi could end up building cars for PSA and perhaps its Japanese rival Nissan. Mitsubishi has been hit by a recall scandal and the withdrawal of support from shareholder DaimlerChrysler. The US-German firm, once a majority shareholder, decided last April to stop providing financial backing. Mitsubishi's sales have slid 41% in the past year, catalysed by the revelation that the company had systematically been hiding records of faults and then secretly repairing vehicles. Mitsubishi is due to unveil a recovery plan later in January. Analysts said that alliances with other carmakers would be a necessary part of whatever it came up with, not least because its own slow sales have left its manufacturing capacity under-used.\n",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>BMW reveals new models pipeline</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nBMW is preparing to enter the market for car-style people carriers, the firm\'s chief has told BBC News.\n\nSpeaking at a BMW event ahead of the Geneva motor show, Helmut Panke predicted demand for such crossover vehicles would soar in Europe. In contrast, he said, the popularity of van-style seven-seat vehicles and traditional saloon cars would fade. \"Customers are moving out of the mini-van (and) traditional concepts are not as attractive anymore,\" he said. \"We have decided that BMW will enter the [crossover] segment,\" he said in the clearest indication yet about the car maker\'s intentions.\n\nMr Panke praised the Honda Accura as the \"best execution\" yet of a crossover vehicle. \"We have decided that the BMW brand will enter the segment,\" he said.\n\nA decision on just how BMW will manage its entry into the new market is due in the first half of 2005. Typically it takes about three years from when a decision is taken before a new model hits the streets, Mr Panke said, implying that a BMW crossover could be on the market by 2008. The coming switch is driven in part by the need for successful carmakers to stay aware of trans-Atlantic differences in the car market, Mr Panke insisted. While in the US drivers tend to prefer sports utility vehicles (SUVs), such as the BMW X5 and its sibling X3, in Europe demand for crossover vehicles is likely to be considerable, Mr Panke said. \"There\'s a growing market here,\" he said. \"We are going to go that way.\"\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <h3 className={classes.cardTitle}>Entertainment</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Super Size Me wins writers' award</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "Super Size Me director Morgan Spurlock has won the Writers Guild of America's award for documentary feature writing. The Oscar-nominated film followed Spurlock as he ate only McDonald's fast food for an entire month. Spurlock was given the award at a special ceremony at the Roosevelt Hotel in Hollywood on Tuesday. Organisers said the rising popularity of documentary films led them to honour a writer for a documentary screenplay for the first time. Producer Brian Grazer presented the award to Spurlock and the film\'s backers, Roadside Attractions, Samuel Goldwyn Films and Showtime Independent Films. Spurlock set out to discover the effect of living on nothing but McDonald's for a month, upgrading to supersize portions when offered. The film followed his 25lb weight gain and the health effects on his body, including his liver and cholesterol levels. McDonald\'s announced it was to scrap its 'supersized' meals last year, but denied the move was as a result of the negative publicity created by Spurlock's film. Spurlock was given his award on the same day the European Court of Human Rights ruled that two UK activists should have been given legal aid in their long fight against a McDonald's libel action. Helen Steel and David Morris, from north London, dubbed the 'McLibel Two', were found guilty in a 1990s trial of libelling the company in a leaflet they had been handing out At the end of the case the High Court in London ruled McDonald\'s had been libelled and awarded the company \xc2\xa360,000 in damages, later reduced to \xc2\xa340,000 on appeal. But he found the leaflet was true in some aspects.",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Ten-year tragedy of missing Manic</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nRichey Edwards, guitarist and lyricist for The Manic Street Preachers, vanished 10 years ago, on 1 February 1995. His disappearance remains one of the most tragic mysteries in rock music.\n\nFor his devoted fans, Richey Edwards was an inspired and inspiring poet, a man who articulated their desperation and despair, who shouted the things most kept hidden. The Manic Street Preachers may only have become stadium-conquering rock giants since his disappearance - but Edwards was the figurehead for their first, dangerous and dazzling incarnation. Edwards did not feature in the original line-up of the band, though. Singer/guitarist James Dean Bradfield, bassist Nicky Wire and drummer Sean Moore were originally accompanied by a rhythm guitarist called Flicker. But Edwards replaced Flicker in time for the band\'s self-financed debut, Suicide Alley, after designing the record\'s artwork.\n\nAfter becoming a full-time member, Edwards became a critical part of the band, writing lyrics and playing guitar - though in many concerts, he was not actually plugged in. But the fiercely intelligent Edwards - who name-checked writers such as Sylvia Plath, George Orwell and Philip Larkin - battled depression, alcohol problems, eating disorders, and self-harm. By the time the band released their third album, The Holy Bible, in October 1994, Edwards had been admitted to hospital with depression. But in his last interview a few months later, seemed to be making plans for the future.\n\nEdwards walks out of the Embassy Hotel in London in the early morning, ahead of the band\'s US tour to promote The Holy Bible. In the following days, police issue a missing person alert and his parents, Graham and Sherry, plead for their son to let them know he is safe and well.\n\nPolice discover Edwards\' car in a car park near the Severn Bridge near Bristol - a notorious suicide spot. The discovery leads many to believe he has killed himself. The rest of the band stop touring and recording.\n\nThe band play their first concerts since Edwards\' disappearance as a trio, performing support slots for The Stone Roses on their UK stadium tour.\n\nThe Manic Street Preachers release their first music since Edwards\' disappearance. A Design For Life reaches number two in the UK singles chart. The album Everything Must Go follows.\n\nThe Manics win best band and best album for Everything Must Go at the Brit Awards.\n\nA fan says she saw Edwards in the hippy resort of Goa, India. Interpol are alerted but do not track him down.\n\nGraham and Sherry Edwards fly to the Spanish island of Fuerteventura six weeks after reports a man fitting their son\'s description has been seen in a bar called Underground. The report comes to nothing.\n\nEdwards\' sister Rachel makes an emotional TV appeal five years after the disappearance. I'd just like to say to him if he is able to listen that we do love him very much and we\'d like him to come back - me, mum and dad, she said.\n\nThe band play a concert in the Cuban capital, Havana - the first contemporary western rock band to play there.\n\nOn the seventh anniversary of his disappearance, police offer Edwards\' parents the opportunity to sign a death certificate. They refuse. The Big Issue magazine, which supports homelessness charities, prints the last known picture of Edwards in a fresh plea for information.\n\nA pair of trainers containing human bones washed up on the banks of the River Severn have no link to Edwards, police say.\n\nThe last song written by Edwards - a song called Judge Y\'Self, which was to have been used for the Judge Dredd film soundtrack - is released on the B-side compilation Lipstick Traces. A skeleton found by the River Severn is not Edwards, tests reveal.\n\nThe Manics\' seventh studio album, Lifeblood, features a song dedicated to Edwards called Cardiff Afterlife.\n\nThe remaining Manic Street Preachers members continue to pay a quarter of the band\'s royalties into an account held in his name.\n",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Police praise 'courageous' Ozzy Rock star</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "b'Police praise \'courageous\' Ozzy\n\nRock star Ozzy Osbourne has been praised by police for \"very courageously\" tackling a burglar who stole jewellery from his house.\n\nThe singer grabbed an intruder who then jumped 30ft (10m) from a first floor window as the star gave chase at his Buckinghamshire home on Monday. \"I acted on impulse,\" Osbourne said. \"In hindsight, it could have been a lot worse. It could\'ve got really ugly.\" A \xc2\xa3100,000 reward has been offered for information leading to a conviction. His wife Sharon, who called the police, said her wedding rings were taken from her bedside table as she slept.\n\nThe heavy metal star said he could have met the same fate as late Beatle George Harrison, who was repeatedly stabbed in a break-in in 1999. \"I could have been badly injured or shot or anything,\" Osbourne said. \"I just thank God that no-one got injured.\" He added he was glad the intruders were not hurt. \"I wouldn\'t want anyone to get injured.\" The singer did not want to talk in detail about his actions but when asked whether he would do the same again replied: \"Is the Pope a Catholic?\" The incident happened at 0400 GMT on Monday in Chalfont St Peter. Detective Inspector Paul Miller of Thames Valley Police said it appeared a man used a ladder to get into the house through a first floor bedroom window. \"Whilst selecting items of jewellery, the burglar was disturbed by Ozzy who very courageously tackled this burglar and pursued him from the house,\" he said. Ozzy said he was \"just coming to grips\" with what had happened and his opinion of the UK had been lowered after 12 relatively trouble-free years in the US.\n\n\"We lived in Los Angeles where people get shot every day and have been trailed by lots of different stalkers - and yet we come back to England and I\'m very disappointed.\" At a press conference on Tuesday, Sharon Osbourne gave details of nine stolen items. They included a diamond wedding ring and two handmade wedding bands Ozzy gave her when they renewed their vows two years ago. She said she wished she had worn them at night. \"I always take them off and put them beside my bed and that\'s where they were, right beside me on my bedside table.\" Also taken were a pearl necklace and a sapphire bought as an investment for their daughters described by Sharon as \"one of the only 24-carat sapphires that is absolutely pure\".\n\nA daisy chain necklace that was a 20th anniversary present and a Franck Muller watch Sharon said was one of only 10 made were also stolen. She expressed her anger at the person who \"hasn\'t worked and wants to take what\'s yours\". \"But the thing is, we worked for everything. I came from Brixton. Ozzy came from not a very nice part of Birmingham and everything we\'ve got we have worked our arses off for.\" \"If I choose to make an investment for my kids in whatever way I choose to make it, that\'s my business and I worked for every God damn penny.\" Ozzy also lamented two years in which the family has been plagued by problems, including his critical injury in a quad bike accident, his wife\'s colon cancer, their childrens\' drug problems and now the burglary.\n\nOn Sunday night, the Osbournes had been celebrating the birthday of singer Sir Elton John\'s partner David Furnish. Police described the intruder as well-built, about 5\' 10\" tall and said he was wearing a ski-mask, a light-coloured jacket and trainers. They believe he may have injured himself when he jumped from the window. There is no description of his accomplice. Police think the pair were driving a large vehicle, possibly a van, and are keen to hear from anyone who may have seen one leaving Chalfont St Peter at speed. Police appealed for public help to find the perpetrators and stolen items on 0845 8 505 505 or 0800 555 111.\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Eastwood's Baby scoops top Oscars</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nClint Eastwood\'s Million Dollar Baby beat Martin Scorsese\'s The Aviator to the top awards at the Oscars on Sunday.\n\nThe boxing drama was named best picture and Eastwood pipped Scorsese to best director, while its stars Hilary Swank and Morgan Freeman won acting awards. The Aviator took five prizes including best supporting actress for Cate Blanchett. The biopic of Howard Hughes led the nominations with 11. Jamie Foxx picked up best actor for playing soul star Ray Charles in Ray. Many expected this to be Scorsese\'s year - but he was unsuccessful in the best director category for the fifth time in his career.\n\nHe has never won despite being nominated for such films as Raging Bull and Goodfellas. Instead, Eastwood took his second Oscar for best director after winning for Unforgiven in 1993. \"It was a wonderful adventure,\" Eastwood said. \"To make a picture in 37 days, it takes a well oiled machine. I am lucky to be here and lucky to be still working. I\'ve got a lot of stuff to do yet.\" Hilary Swank picked up her second best actress Oscar for playing a female boxer in Million Dollar Baby, beating stars including Annette Bening, Kate Winslet and Imelda Staunton. \"I don\'t know what I did in this life to deserve this,\" she told the audience. \"I\'m just a girl from a trailer park who had a dream.\" Morgan Freeman beat actors including Clive Owen, Jamie Foxx and Alan Alda to the prize for best supporting actor. He thanked Eastwood and described the film as \"a labour of love\". This was the fourth nomination of his career but his first win. Backstage, he said: \"A lot of people say you\'re due - maybe you are, maybe you aren\'t - it\'s an accolade.\" Million Dollar Baby\'s success was the night\'s biggest surprise after The Aviator seemed to have the advantage until the end of the ceremony.\n\nCate Blanchett, who won for playing late screen legend Katharine Hepburn in The Aviator, said her award was \"an indescribable surprise and honour\". Of Hepburn, she said: \"The longevity of her career is inspiring to everyone.\" Blanchett also paid tribute to the film\'s director Martin Scorsese, telling him: \"I hope my son will marry your daughter.\" The Aviator\'s other awards came for cinematography, film editing, art direction and costume design. And Jamie Foxx, who had two nominations this year, paid tribute to the \"beautiful legacy\" of soul legend Ray Charles, who died last year, and thanked director Taylor Hackford. \"You took a chance, man,\" he said. \"That love for Ray Charles was deep down in the earth somewhere and you opened it up. \"Everybody\'s drowning in this love. Thank you for taking a chance and thank you for waiting 15 years to get me to do it.\"\n\nHe broke down in tears when speaking about being whipped by his grandmother, whom he described as his first acting teacher, when he was young. In other awards, cartoon hit The Incredibles won best animated feature and best sound editing. Bittersweet comedy Sideways won best adapted screenplay while the original screenplay prize went to Eternal Sunshine of the Spotless Mind. Born into Brothels, about the children of prostitutes in Calcutta, was named best documentary, The Sea Inside was named best foreign language film and Finding Neverland got the accolade for best musical score. Spider-Man 2 triumphed in the visual effects category, Ray won best sound mixing and Lemony Snicket\'s A Series of Unfortunate Events picked up best make-up. Former British TV presenter Andrea Arnold, who hosted children\'s shows Motormouth and Number 73 in the 1980s, won best short film for Wasp. Comedian Chris Rock, who hosted the ceremony for the first time, received a standing ovation before getting the show under way.\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>info_outline</Icon>
              </CardIcon>
              <h3 className={classes.cardTitle}>Tech</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Text message record smashed again</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nUK mobile owners continue to break records with their text messaging, with latest figures showing that 26 billion texts were sent in total in 2004.\n\nThe figures collected by the Mobile Data Association (MDA) showed that 2.4 billion were fired off in December alone, the highest monthly total ever. That was 26% more than in December 2003. The records even surpassed the MDA\'s own predictions, it said. Every day 78 million messages are sent and there are no signs of a slow down. Before December\'s bumper text record, the previous highest monthly total was in October 2004, when 2.3 billion were sent. Text messaging is set to smash more records in 2005 too, said the MDA, with forecasts suggesting a total of 30 billion for the year.\n\nEven though mobiles are becoming increasingly sophisticated with much more multimedia applications, texting is still one of the most useful functions of mobiles. People are using SMS to do much more too. Booking cinema tickets, text voting, and news or sports text alerts are growing popular. Mobile owners have also given the chance to donate to the Disasters Emergency Committee\'s (DEC) Asian Tsunami fund by texting \"Donate\" to a simple short code number. Looking further ahead in the year, the MDA\'s chairman Mike Short, has predicted that more people will go online through their mobiles, estimating 15 billion WAP page impressions. Handsets with GPRS capability - an \"always on\" net connection - will rise to 75%, while 3G mobile ownership growing to five million by the end of 2005. These third generation mobiles offer a high-speed connection which means more data like video can be received on the phone. Globally, mobile phone sales passed 167 million in the third quarter of 2004, according to a recent report from analysts Gartner. That was 26% more than the previous year. It is predicted that there would be two billion handsets in use worldwide by the end of 2005.\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>US woman sues over ink cartridges</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nA US woman is suing Hewlett Packard (HP), saying its printer ink cartridges are secretly programmed to expire on a certain date.\n\nThe unnamed woman from Georgia says that a chip inside the cartridge tells the printer that it needs re-filling even when it does not. The lawsuit seeks to represent anyone in the US who has purchased an HP inkjet printer since February 2001. HP, the world\'s biggest printer firm, declined to comment on the lawsuit. HP ink cartridges use a chip technology to sense when they are low on ink and advise the user to make a change.\n\nBut the suit claims the chips also shut down the cartridges at a predetermined date regardless of whether they are empty. \"The smart chip is dually engineered to prematurely register ink depletion and to render a cartridge unusable through the use of a built-in expiration date that is not revealed to the consumer,\" the suit said. The lawsuit is asking for restitution, damages and other compensation. The cost of printer cartridges has been a contentious issue in Europe for the last 18 months. The price of inkjet printers has come down to as little as \xc2\xa334 but it could cost up to \xc2\xa31,700 in running costs over an 18-month period due to cartridge, a study by Computeractive Magazine revealed last year. The inkjet printer market has been the subject of an investigation by the UK\'s Office of Fair Trading (OFT), which concluded in a 2002 report that retailers and manufacturers needed to make pricing more transparent for consumers.\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>EA to take on film and TV giants</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "\n\nVideo game giant Electronic Arts (EA) says it wants to become the biggest entertainment firm in the world.\n\nThe US firm says it wants to compete with companies such as Disney and will only achieve this by making games appeal to mainstream audiences. EA publishes blockbuster titles such as Fifa and John Madden, as well as video game versions of movies such as Harry Potter and the James Bond films. Its revenues were $3bn (\xc2\xa31.65bn) in 2004, which EA hoped to double by 2009. EA is the biggest games publisher in the world and in 2004 had 27 titles which sold in excess of one million copies each. Nine of the 20 biggest-selling games in the UK last year were published by EA.\n\nGerhard Florin, EA\'s managing director for European publishing, said: \"Doubling our industry in five years is not rocket science.\" He said it would take many years before EA could challenge Disney - which in 2004 reported revenues of $30bn (\xc2\xa316bn) - but it remained a goal for the company. \"We will be able to bring more people into gaming because games will be more emotional.\" Mr Florin predicted that the next round of games console would give developers enough power to create real emotion.\n\n\"It\'s the subtleties, the eyes, the mouth - 5,000 polygons doesn\'t really sell the emotion.\n\n\"With PS3 and Xbox 2, we can go on the main character with 30,000 to 50,000 polygons,\" he said. \"With that increased firepower, the Finding Nemo video game looks just like the movie, but it will be interactive.\" Mr Florin said that more than 50% of all EA\'s games were sold to adults and played by adults, but the perception remained that the video game industry was for children. \"Our goal is to bring games to the masses which bring out emotions.\" EA said the video game industry was now bigger than the music industry. \"Nobody queues for music anymore.\"\n\n\"You can\'t ignore an industry when people queue to buy a game at midnight because they are so desperate to play it,\" he said, referring to demand for titles for such as Grand Theft Auto: San Andreas and Halo 2.\n\nJan Bolz, EA\'s vice president of sales and marketing in Europe, said the firm was working to give video games a more central role in popular culture. He said the company was in advanced stages of discussions over a reality TV show in which viewers could control the actions of the characters as in its popular game The Sims. \"One idea could be that you\'re controlling a family, telling them when to go to the kitchen and when to go to the bedroom, and with this mechanism you have gamers all over the world \'playing the show\',\" said Mr Bolz.\n\nHe also said EA was planning an international awards show \"similar to the Oscars and the Grammys\" which would combine video games, music and movies. Mr Bolz said video games firm had to work more closely with celebrities. \"People will want to play video games if their heroes like Robbie Williams or Christina Aguilera are in them.\" Mr Florin said the challenge was to keep people playing in their 30s, 40s and 50s. \"There\'s an indication that a 30 year old comes home from work and still wants to play games. \"If that\'s true, that\'s a big challenge for TV broadcasters - because watching TV is the biggest pastime at present.\"\n'",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>The gaming world in 2005</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableData={[
                  [
                    "If you have finished Doom 3, Half Life 2 and Halo 2, don't worry. There's a host of gaming gems set for release in 2005.\n\n WORLD OF WARCRAFT \n\nThe US reception to this game from developers Blizzard has been hugely enthusiastic, with the title topping its competitors in the area of life-eating, high-fantasy, massively multiplayer role-player gaming. Solid, diverse, accessible and visually striking, it may well open up the genre like never before. If nothing else, it will develop a vast and loyal community. Released 25 February on PC. ICO 2 (WORKING TITLE) Ico remains a benchmark for PS2 gaming, a title that took players into a uniquely atmospheric and artistic world of adventure. The (spiritual) sequel has visuals that echo those of the original, but promises to expand the Ico world, with hero Wanda taking on a series of giants. The other known working title is Wanda And Colossus. Release date to be confirmed on PS2. THE LEGEND OF ZELDA \n\nThe charismatic cel imagery has been scrapped in favour of a dark, detailed aesthetic (realism isn't quite the right word) that connects more with Ocarina Of Time. Link resumes his more teenage incarnation too, though enemies, elements and moves look familiar from the impressive trailer that has been released. Horseback adventuring across a vast land is promised. Release date to be confirmed on GameCube. ADVANCE WARS DS The UK Nintendo DS launch line-up is still to be confirmed at time of writing, but titles that exploit its two-screen and touch capacity, like WarioWare Touched! and Sega's Feel The Magic, are making a strong impression in other territories. Personally, I can't wait for the latest Advance Wars, the franchise that has been the icing on the cake of Nintendo handheld gaming during the past few years. Release date to be confirmed on DS. S.T.A.L.K.E.R. \n\nFollowing in the high-spec footsteps of Far Cry and Half-Life 2, this looks like the key upcoming PC first-person shooter (with role-playing elements). The fact that it is inspired in part by Andrei Tarkovsky's enigmatic 1979 masterpiece Stalker and set in 2012 in the disaster zone, a world of decay and mutation, makes it all the more intriguing. Released 1 March on PC. METAL GEAR SOLID: SNAKE EATER \n\nMore Hideo Kojima serious stealth, featuring action in the Soviet-controlled jungle in 1964. The game see Snake having to survive on his wits in the jungle, including eating wildlife. Once again, expect cinematic cut scenes and polished production values. Released March on PS2. DEAD OR ALIVE ULTIMATE Tecmo's Team Ninja are back with retooled and revamped versions of Dead Or Alive 1 and 2. Here's the big, big deal though - they're playable over Xbox Live. Released 11 March on Xbox. KNIGHTS OF THE OLD REPUBLIC II Looks set to build on the acclaimed original Star Wars role playing game with new characters, new Force powers and a new set of moral decisions, despite a different developer. Released 11 February on Xbox and PC.\n",
                  ],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
