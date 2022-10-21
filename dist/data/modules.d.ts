interface FourChordsLoopHardCoded {
    modeName: 'FourChordsLoopHardCoded';
    progressions: {
        groupTitle: string;
        collectionId: number;
        progressionId: number;
        isRootPosition: boolean;
        inversionIndex: number;
    }[];
}
declare type ChordilonContent = FourChordsLoopHardCoded;
interface Chordilon {
    type: 'chordilon';
    content: ChordilonContent;
    tonic: string;
    scaleType: string;
    title?: string;
}
interface ChapterElement {
    type: 'paragraph' | 'heading' | 'orderedList' | 'unorderedList' | 'listItem' | 'code' | 'video' | 'image' | 'subTitle' | 'basicQuestion' | 'quiz';
    children?: ChapterElement[];
    content?: string;
    [otherProps: string]: any;
}
interface Chapter {
    title: string;
    description: string;
    elements: (ChapterElement | Chordilon)[];
}
interface Module {
    id: number;
    meta: {
        description: string;
        title: string;
        thumbnail: string;
        prerequisites: number[];
        nextModules: number[];
        goals: string[];
    };
    chapters: Chapter[];
}
declare const modules: Module[];
export default modules;
