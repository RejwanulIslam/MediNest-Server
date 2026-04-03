export declare const categorieService: {
    addCatagoty: (categorieName: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        categorieName: string;
    }>;
    getAllCatagoty: () => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        categorieName: string;
    }[]>;
    deleteCatagoty: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        categorieName: string;
    }>;
};
//# sourceMappingURL=categorie.service.d.ts.map