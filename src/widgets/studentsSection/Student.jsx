import { ActivStudents } from "./activStudents/ActivStudents";
import { ParlamentStudents } from "./parlamentStudents/ParlamentStudents";
import { StudentsHostel } from "./studentsHostel/StudentsHostel";

const getContentType = (data) => {
    if (!data) return null;
    if (Array.isArray(data)) {
        if (data[0]?.description2) return "parlament";
        if (data.some(({ conditions, name2 }) => conditions || name2)) return "hostel";
    }
    return data.students?.length || Array.isArray(data.items) ? "active" : null;
};

const CONTENT_MAPPING = {
    parlament: ParlamentStudents,
    active: ActivStudents,
    hostel: StudentsHostel,
};

export const Student = ({ studentData }) => {
    const data = studentData?.dataActiv;
    const contentType = getContentType(data);
    if (!contentType) return null;
    const Component = CONTENT_MAPPING[contentType];
    return <Component data={contentType === "active" ? data.students || data.items : data} />;
};
