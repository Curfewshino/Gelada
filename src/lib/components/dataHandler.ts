const subjectName = ['Science', 'Math', 'Thai', 'Social', 'English', 'Engineering', 'Chemistry'];



export function subjectHandler(subject_id: number){
    return subjectName[subject_id];
}

export function tagHandler(tag_id: { [x: string]: number; }){
    let tagName: Array<string> = [];
    for(var i in tag_id){
        let tagnum = tag_id[i] - 100;
        tagName[i] = subjectName[tagnum];
    }
    return tagName;
}
