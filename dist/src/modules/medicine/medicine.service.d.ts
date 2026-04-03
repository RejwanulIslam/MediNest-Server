import { MedData } from "../../types";
export declare const medicineService: {
    addMedicine: (data: MedData) => Promise<{
        id: string;
        medicineName: string;
        price: number;
        image: string | null;
        stock: number;
        detels: string;
        manufacturer: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        categorieId: string;
    } | {
        error: any;
    }>;
    getAllMedicine: (serch: string, category: string, minPrice: string, maxPrice: string, manufacturer: string) => Promise<({
        categorie: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categorieName: string;
        };
    } & {
        id: string;
        medicineName: string;
        price: number;
        image: string | null;
        stock: number;
        detels: string;
        manufacturer: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        categorieId: string;
    })[] | {
        error: any;
    }>;
    getMedicineByID: (id: string) => Promise<({
        categorie: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categorieName: string;
        };
    } & {
        id: string;
        medicineName: string;
        price: number;
        image: string | null;
        stock: number;
        detels: string;
        manufacturer: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        categorieId: string;
    }) | {
        error: any;
    } | null>;
    updateMedicine: (id: string, data: MedData) => Promise<{
        id: string;
        medicineName: string;
        price: number;
        image: string | null;
        stock: number;
        detels: string;
        manufacturer: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        categorieId: string;
    } | {
        error: any;
    }>;
    deleteMedicine: (id: string) => Promise<{
        id: string;
        medicineName: string;
        price: number;
        image: string | null;
        stock: number;
        detels: string;
        manufacturer: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        categorieId: string;
    } | {
        error: any;
    }>;
};
//# sourceMappingURL=medicine.service.d.ts.map