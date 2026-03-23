import BookingCare from "./BookingCare";
import CommerceProject2 from "./E-Commerce.Project2";
import Portfolio from "./Portfolio";

const ProjectPage = () => {
  return (
    <div className="project-container">
      <div className="project-wrapper">
        <Portfolio />
        <BookingCare />
        <CommerceProject2 />
      </div>

      <style>{`
        * {
          box-sizing: border-box; /* 🔥 fix tràn layout */
        }

        .project-container {
          width: 100%;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          padding: 20px 80px;
          overflow-x: hidden; /* 🔥 tránh lệch ngang */
        }

        .project-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 100px;
          width: 100%;
          max-width: 1200px;
        }

        .project-wrapper > * {
          flex: 0 0 auto;
        }

        /* ===== TABLET ===== */
        @media (max-width: 1024px) {
          .project-container {
            padding: 20px 40px;
          }

          .project-wrapper {
            gap: 40px;
          }

          .project-wrapper > * {
            width: calc(50% - 20px); /* 🔥 chuẩn 2 cột */
            max-width: 100%;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .project-container {
            padding: 20px 0; /* 🔥 bỏ padding ngang -> hết lệch */
          }

          .project-wrapper {
            flex-direction: column;
            align-items: center;
            gap: 25px;
          }

          .project-wrapper > * {
            width: 100%;
            max-width: 95%; /* 🔥 tránh dính mép màn hình */
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectPage;