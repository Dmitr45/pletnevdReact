export class HomeService{
    createText(jsonText){
        const UpperText =  jsonText.text.toUpperCase();
        return {"upperText" : UpperText}
    }
};