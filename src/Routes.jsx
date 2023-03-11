import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HackathonbeautyTwo = React.lazy(() => import("pages/HackathonbeautyTwo"));
const Hackathonbeauty = React.lazy(() => import("pages/Hackathonbeauty"));
const ComponentsOne = React.lazy(() => import("pages/ComponentsOne"));
const ButtonsTwo = React.lazy(() => import("pages/ButtonsTwo"));
const ProductcardOne = React.lazy(() => import("pages/ProductcardOne"));
const WwwultacombyhtmltodesignFREEversion09032023One = React.lazy(() =>
  import("pages/WwwultacombyhtmltodesignFREEversion09032023One")
);
const WwwultacombyhtmltodesignFREEversion09032023Two = React.lazy(() =>
  import("pages/WwwultacombyhtmltodesignFREEversion09032023Two")
);
const Cart = React.lazy(() => import("pages/Cart"));
const WwwultacombyhtmltodesignFREEversion09032023 = React.lazy(() =>
  import("pages/WwwultacombyhtmltodesignFREEversion09032023")
);
const CatalogLips = React.lazy(() => import("pages/CatalogLips"));
const Productcard = React.lazy(() => import("pages/Productcard"));
const ProductcardTwo = React.lazy(() => import("pages/ProductcardTwo"));
const LipsLipstick = React.lazy(() => import("pages/LipsLipstick"));
const Info = React.lazy(() => import("pages/Info"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Signup = React.lazy(() => import("pages/Signup"));
const Signin = React.lazy(() => import("pages/Signin"));
const ProductcardThree = React.lazy(() => import("pages/ProductcardThree"));
const Buttons = React.lazy(() => import("pages/Buttons"));
const Components = React.lazy(() => import("pages/Components"));
const ComponentsTwo = React.lazy(() => import("pages/ComponentsTwo"));
const Sitemap2versionOne = React.lazy(() => import("pages/Sitemap2versionOne"));
const Sitemap2version = React.lazy(() => import("pages/Sitemap2version"));
const ButtonsOne = React.lazy(() => import("pages/ButtonsOne"));
const Sitemap1version = React.lazy(() => import("pages/Sitemap1version"));
const HackathonbeautyOne = React.lazy(() => import("pages/HackathonbeautyOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HackathonbeautyOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sitemap1version" element={<Sitemap1version />} />
          <Route path="/buttonsone" element={<ButtonsOne />} />
          <Route path="/sitemap2version" element={<Sitemap2version />} />
          <Route path="/sitemap2versionone" element={<Sitemap2versionOne />} />
          <Route path="/componentstwo" element={<ComponentsTwo />} />
          <Route path="/components" element={<Components />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/productcardthree" element={<ProductcardThree />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/info" element={<Info />} />
          <Route path="/lipslipstick" element={<LipsLipstick />} />
          <Route path="/productcardtwo" element={<ProductcardTwo />} />
          <Route path="/productcard" element={<Productcard />} />
          <Route path="/cataloglips" element={<CatalogLips />} />
          <Route
            path="/wwwultacombyhtmltodesignfreeversion09032023"
            element={<WwwultacombyhtmltodesignFREEversion09032023 />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/wwwultacombyhtmltodesignfreeversion09032023two"
            element={<WwwultacombyhtmltodesignFREEversion09032023Two />}
          />
          <Route
            path="/wwwultacombyhtmltodesignfreeversion09032023one"
            element={<WwwultacombyhtmltodesignFREEversion09032023One />}
          />
          <Route path="/productcardone" element={<ProductcardOne />} />
          <Route path="/buttonstwo" element={<ButtonsTwo />} />
          <Route path="/componentsone" element={<ComponentsOne />} />
          <Route path="/hackathonbeauty" element={<Hackathonbeauty />} />
          <Route path="/hackathonbeautytwo" element={<HackathonbeautyTwo />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
