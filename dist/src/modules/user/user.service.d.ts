export declare const userService: {
    getAllUser: () => Promise<{
        role: string | null;
        status: string | null;
        id: string;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        emailVerified: boolean;
    }[] | {
        error: any;
    }>;
    updateUser: (id: string, status: string) => Promise<{
        role: string | null;
        status: string | null;
        id: string;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        emailVerified: boolean;
    } | {
        error: any;
    }>;
    manageProfile: (id: string, data: any) => Promise<{
        role: string | null;
        status: string | null;
        id: string;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        email: string;
        emailVerified: boolean;
    } | {
        error: any;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map