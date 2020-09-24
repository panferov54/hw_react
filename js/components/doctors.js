'use strict';

function Doctor(props) {
return(
    <div className="col-sm-6 col-md-3 team__item">
        <img src={props.image} alt="cox" className="img-fluid"/>
            <div className="team__description">
                <p className="team__description-user">{props.name}</p>
                <p className="team__description-title">{props.title}</p>
            </div>
            <span className="text-muted">{props.status}</span>
    </div>
);}


function Portfolio(props) {
return(

    <div className="col-sm-12 col-md-6 col-lg-4">
        <img src={props.image} alt="portfolio" className="img-fluid mt-4"/>
    </div>
);
}

function Navlinks(props) {
    return(

  <React.Fragment>
      <li className="nav-item mr-1"><a href={props.href} target={props.target} className="nav-link">{props.name}</a></li>

  </React.Fragment>

)
}

function App3() {
return(
    <React.Fragment>
        <Navlinks
            href={"#about"}
            name={"About"}
        />
        <Navlinks
            href={"#portfolio"}
            name={"Portfolio"}
        />
        <Navlinks
            href={"#team"}
            name={"Team"}
        />
        <Navlinks
            href={"#contact"}
            name={"Contact"}
        />
        <Navlinks
            href={"https://facebook.com"}
            target={"_blank"}
            name={"Facebook"}
        />
    </React.Fragment>
)
}
function App2() {
return(
    <React.Fragment>
      <Portfolio
      image={"images/portfolio-image.png"}
      />
        <Portfolio
            image={"images/portfolio-image.png"}
        />
        <Portfolio
            image={"images/portfolio-image.png"}
        />
        <Portfolio
            image={"images/portfolio-image.png"}
        />
        <Portfolio
            image={"images/portfolio-image.png"}
        />
        <Portfolio
            image={"images/portfolio-image.png"}
        />
    </React.Fragment>
)
}
function App() {
return (
    <React.Fragment>
        <Doctor
            image={"images/Dr-Cox.jpg"}
            name={"Dr. Cox"}
            title={"Main doctor in hospital"}
            status={"Main Doctor"}
        />
        <Doctor
            image={"images/jd.png"}
            name={"Dr. J.D."}
            title={"Second doctor in hospital"}
            status={"2-Doctor"}
        />
        <Doctor
            image={"images/turk.png"}
            name={"Dr. Turk"}
            title={"Third doctor in hospital"}
            status={"3-Doctor"}
        />
        <Doctor
            image={"images/turkwife.jpg"}
            name={"Dr. Carla"}
            title={"Fourd doctor in hospital"}
            status={"4-Doctor"}
        />
    </React.Fragment>
)
}


ReactDOM.render(
    <App />,
    document.getElementById('doctors')

)
ReactDOM.render(
    <App2 />,
    document.getElementById('portfolios')

)

ReactDOM.render(
    <App3 />,
    document.getElementById('navmenu')

)