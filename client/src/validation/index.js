import z from 'zod'

export const SignupSchema = z.object({
    firstName: z.string().trim().min(2, {message: "First name is required."}).max(20, {message: "First name must be atmost 20 characters."}).regex(/^[a-zA-Z]+$/, {message: "Only letters are allowed"}),
    lastName: z.string().trim().min(2, {message: "Last name is required."}).max(20, {message: "Username must be atmost 20 characters."}).regex(/^[a-zA-Z]+$/, {message: "Only letters are allowed"}),
    email: z.string().trim().email({message: "Invalid email address."}),
    password: z.string().trim().min(6, {message: "Password must be atleast 6 characters."}).max(15, {message: "Password must be atmost 15 characters."}),
})

export const LoginSchema = z.object({
    email: z.string().trim().email({message: "Invalid email address."}),
    password: z.string().trim().min(6, {message: "Password must be atleast 6 characters."}).max(15, {message: "Password must be atmost 15 characters."}),
})