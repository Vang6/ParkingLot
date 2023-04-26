export interface AuthCredential {
    userName: string;
    password: string;
}
export enum CarType {
    SUV = 'SUV',
    SEDAN = 'Sedan',
    MUV = 'MUV'
}
export interface CarModel {
    name: string,
    brand: string,
    type: CarType,
    description?: string,
    ev: boolean
}
export interface ApplicationMasterState {
    sideBarParams: SideBarParams;
}
export interface SideBarParams {
    menuOpen: boolean;
    nav?: any[]; 
}
export interface NavBarParams {
    onMenuClick:() => void;
    nav?: any[]; 
}