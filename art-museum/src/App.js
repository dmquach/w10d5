import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route, Switch, Redirect } from "react-router-dom"

function App() {
    return (
        <div className="page-wrapper">
            <Switch>
                <Route path="/galleries/:galleryId">
                    <GalleryView galleries={harvardArt.records}/>
                </Route>
                <Route path="/error">
                    <h2>Page Not Found</h2>
                </Route>
                <Route exact path="/">
                    <h2>Harvard Art Museum</h2>
                    <p>
                        Look, but Don't Touch. Please select a Gallery in the navigation bar.
                    </p>
                    <GalleryNavigation galleries={harvardArt.records}/>
                </Route>
                <Redirect to="/error"/>
            </Switch>
        </div>
    );
}

export default App;
