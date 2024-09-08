export interface ResponseData  {
    message: string
  }

export interface CardObject {
    id : string;
    frontImage: string;
    backImage?: string ;
  }

export interface UserObject {
    id: string;
    name: string;
    email: string;
    avatar: string;
  }
  export interface Token {
    id?: string;
}

export interface ImageObject {
  id: string;
  frontImage: string;
  backImage: string;
}

export interface EnvelopeProps {
id: string;
frontImage: string;
onClick: (image: ImageObject) => void;
}