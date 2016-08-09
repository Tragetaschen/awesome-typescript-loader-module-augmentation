import { area, curveStepAfter } from 'd3-shape';

var a=area<number>().curve(curveStepAfter);