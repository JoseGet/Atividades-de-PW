import { PrismaClient, Major } from "@prisma/client";

import { CreateMajorDto, UpdateMajorDto } from "../types/major";
import major from "../controllers/major";

const prisma = new PrismaClient()

export const creatMajor = async (major:CreateMajorDto): Promise<Major> => {
    return prisma.major.create({data:major});
}

export const getMajors = async (): Promise<Major[]> => {
    return prisma.major.findMany();
}

export const getMajor = async(id: string): Promise<Major | null> => {
    return prisma.major.findUnique({where: {id}});
}

export const removeMajor = async(id: string): Promise<Major> => {
    
    const deleteMajor = await prisma.major.delete({
        where: {
          id: id,
        },
    })
    return deleteMajor
}

export const updateMajor = async(id:string, major: UpdateMajorDto): Promise<Major> => {

    const update_major = await prisma.major.update({

        where: {
            id: id,
          },
          data: {
            name: major.name,
            code: major.code,
            description: major.description 
          },
    })
    return update_major
}