import {User, Company, AddJob, Openings} from '../../generated/prisma'
export type JobWithCompany = Openings & {company : Company}
export type UserWithCompany = User & {company : Company}
export type paramsType = {params :  Promise<{ id : string }>}