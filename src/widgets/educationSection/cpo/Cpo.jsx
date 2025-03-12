import { MainContent } from './MainContent';
import { FacultyContent } from './FacultyContent';
import { Courses } from './Courses';
import "./cpo.scss";

export const Cpo = ({ currentSection }) => {
    if (!currentSection) return null;

    const views = {
        main: !currentSection.faculties,
        courses: currentSection.faculties?.[0]?.points
    }

    return views.main ? <MainContent data={currentSection} />
        : views.courses ? <Courses data={currentSection} />
            : <FacultyContent data={currentSection} />
};
