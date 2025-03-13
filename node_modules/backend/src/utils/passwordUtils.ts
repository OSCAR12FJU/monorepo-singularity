import bcrypt from "bcryptjs";

export const comparePassword = async (inputPassword: string, storedPassword: string): Promise<boolean> =>{
    return bcrypt.compare(inputPassword, storedPassword,)
};

export const hashPassword = async (password: string): Promise<string> =>{
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
}