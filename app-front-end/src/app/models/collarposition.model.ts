import { Depthreading } from "./depthreading.model";

export class Collarposition {
    public latitude:number | undefined;
    public longitude:number | undefined;
    public dip:number | undefined;
    public azimuth:number | undefined;
    public readings:Depthreading[] | undefined;
}
