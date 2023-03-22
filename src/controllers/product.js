import Product from "../models/product"
import Joi from "joi";

const productSchema = Joi.object(
    {
        name: Joi.string().required(),
        price: Joi.number().required(),
        desc: Joi.string(),
        status: Joi.string(),
        quaty: Joi.number()
    }
);
export const getAll = async function (req, res) {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(404).json({ message: "khong co san pham nao" });
        }
        return res.status(200).json(products);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            const message = error.details[0].message;
            return res.status(400).json({ message })
        }
        const product = await Product.create(req.body);
        return res.json({
            message: "them thanh cong",
            product,
        });
    } catch (error) {
        res.status(404).json({ message: error });
    }
}
export const update = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            const message = error.details[0].message;
            return res.status(400).json({ message })
        }
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return response.status(200).json({
            message: "sua thanh cong",
            product
        });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'xoa thanh cong',
            product,
        });
    } catch (error) {
        res.status(200).json({ message: error });
    }
}