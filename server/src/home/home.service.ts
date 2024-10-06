

// Типы
export interface JsonText {
    text: string
};
export interface UpperJsonText{
    upperText: string
}


// Сервисы
export class HomeService{
    createText(jsonText:JsonText):UpperJsonText{
        const UpperText =  jsonText.text.toUpperCase();
        return {"upperText" : UpperText}
    }
};