import { type LostConfig } from "jsr:@lost-c3/lib@1.2.5";

const Config: LostConfig<'effect'> = {
    Type: 'effect',

    AddonId: 'Lost_MyEffect',
    AddonName: 'Lost Effect',
    AddonDescription: 'Amazing effect made with Lost.',
    Category: 'color',
    Version: '1.0.0.0',
    Author: 'lostinmind.',
    WebsiteURL: `https://addon.com`,
    DocsURL: `https://docs.addon.com`,

    SupportedRenderers: ['webgl', 'webgl2', 'webgpu'],
    BlendsBackground: false,
    UsesDepth: false,
    CrossSampling: false,
    PreservesOpaqueness: true,
    Animated: false,
    MustPredraw: false,
    Supports3DDirectRendering: false,
    ExtendBox: [0, 0]
};

export default Config;