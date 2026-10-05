import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateRemarkDto {  
    @IsInt() //for studentId, we can use @IsInt() decorator to validate that the value is an integer
    //wla syay IsNotEmpty becus foreign key man sya
    studentId: number;

    @IsString()
    @IsNotEmpty() 
    content: string;

    @IsOptional()
    @IsString()
    category?: string;
} 