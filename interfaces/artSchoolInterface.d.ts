export default interface IArtSchool {
    artSchoolId?: string;
    name: string;
    instructorName: string;
    instructorCertificate?: string;
    phoneNumber?: string;
    emailId?: string;
    description: string;
    location: IArtSchoolLocation
}

export default interface IArtSchoolLocation {
    address?: string;
    landmark?: string;
    pincode?: string;
    city?: string;
    //map location
    gmapLink: string;
    longitude?: number;
    latitude?: number;
}