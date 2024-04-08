import { Request, Response } from "express";
import User from "../models/user";

export const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.find({ auth0Id });

    if (existingUser) {
      return res.status(200).send();
    }

    const user = new User(req.body);
    await user.save();

    res.status(201).json(user.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};
