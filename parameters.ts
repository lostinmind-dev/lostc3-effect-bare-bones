import { EffectParameter } from "jsr:@lost-c3/lib@1.2.5";

const EffectParameters: EffectParameter<any>[] = [
    new EffectParameter<any>({
        Type: 'color',
        Id: 'adadad',
        InitialValue: [0, 0, 0]
    }),
    new EffectParameter<any>({
        Type: 'float',
        Id: 'float',
        InitialValue: 1
    }),
    new EffectParameter<any>({
        Type: 'percent',
        Id: 'percent',
        InitialValue: 0.5
    })
]

export default EffectParameters;