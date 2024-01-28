import { Fragment, useEffect, useState } from "react";
import { School } from "@mui/icons-material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Loading from "../components/loading/Loading";

const Experience = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="experience" style={{ background: "#f0f0f0" }}>
          <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2023 (May 10 - October 24)"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                Najot Ta'lim <br /> Tashkent, Uzbekistan
              </h3>
              <p>React.js Course Diploma</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 - 2023"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                Tashkent University of Information Technologies <br /> Tashkent,
                Uzbekistan
              </h3>

              <p> Bachelor's degree</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - 2019"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                Karshi construction College
                <br /> Karshi, Uzbekistan
              </h3>

              <p> College diploma</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      )}
    </Fragment>
  );
};

export default Experience;
