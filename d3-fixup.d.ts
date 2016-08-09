import { CurveFactory } from 'd3-shape';

declare module 'd3-shape' {
    export var curveStepAfter: CurveFactory;
}
