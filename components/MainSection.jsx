import React, { Fragment } from "react";
import { useParticle } from "@/context/particle";
import BottomNavigation from "@/components/BottomNavigation";
import StepSidebar from "@/components/StepSidebar";

const MainSection = ({ children }) => {
  const particleContext = useParticle();
  const { init } = particleContext;

  return (
    <Fragment>
      {init && (
        <div
          className="layout-container"
          style={{ position: "relative", zIndex: 999 }}
        >
          <StepSidebar />
          <div className="content-container">
            {/* Content area with dynamic margin based on sidebar state */}
            <div className="content">
              {/* Content */}
              {children}
            </div>
          </div>
          <BottomNavigation />
        </div>
      )}
    </Fragment>
  );
};

export default MainSection;
