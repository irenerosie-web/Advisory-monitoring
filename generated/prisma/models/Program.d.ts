import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProgramModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgramPayload>;
export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null;
    _avg: ProgramAvgAggregateOutputType | null;
    _sum: ProgramSumAggregateOutputType | null;
    _min: ProgramMinAggregateOutputType | null;
    _max: ProgramMaxAggregateOutputType | null;
};
export type ProgramAvgAggregateOutputType = {
    id: number | null;
};
export type ProgramSumAggregateOutputType = {
    id: number | null;
};
export type ProgramMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
};
export type ProgramMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
};
export type ProgramCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    _all: number;
};
export type ProgramAvgAggregateInputType = {
    id?: true;
};
export type ProgramSumAggregateInputType = {
    id?: true;
};
export type ProgramMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
};
export type ProgramMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
};
export type ProgramCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    _all?: true;
};
export type ProgramAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramWhereInput;
    orderBy?: Prisma.ProgramOrderByWithRelationInput | Prisma.ProgramOrderByWithRelationInput[];
    cursor?: Prisma.ProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProgramCountAggregateInputType;
    _avg?: ProgramAvgAggregateInputType;
    _sum?: ProgramSumAggregateInputType;
    _min?: ProgramMinAggregateInputType;
    _max?: ProgramMaxAggregateInputType;
};
export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
    [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgram[P]> : Prisma.GetScalarType<T[P], AggregateProgram[P]>;
};
export type ProgramGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramWhereInput;
    orderBy?: Prisma.ProgramOrderByWithAggregationInput | Prisma.ProgramOrderByWithAggregationInput[];
    by: Prisma.ProgramScalarFieldEnum[] | Prisma.ProgramScalarFieldEnum;
    having?: Prisma.ProgramScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramCountAggregateInputType | true;
    _avg?: ProgramAvgAggregateInputType;
    _sum?: ProgramSumAggregateInputType;
    _min?: ProgramMinAggregateInputType;
    _max?: ProgramMaxAggregateInputType;
};
export type ProgramGroupByOutputType = {
    id: number;
    code: string;
    name: string;
    _count: ProgramCountAggregateOutputType | null;
    _avg: ProgramAvgAggregateOutputType | null;
    _sum: ProgramSumAggregateOutputType | null;
    _min: ProgramMinAggregateOutputType | null;
    _max: ProgramMaxAggregateOutputType | null;
};
export type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgramGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgramGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgramGroupByOutputType[P]>;
}>>;
export type ProgramWhereInput = {
    AND?: Prisma.ProgramWhereInput | Prisma.ProgramWhereInput[];
    OR?: Prisma.ProgramWhereInput[];
    NOT?: Prisma.ProgramWhereInput | Prisma.ProgramWhereInput[];
    id?: Prisma.IntFilter<"Program"> | number;
    code?: Prisma.StringFilter<"Program"> | string;
    name?: Prisma.StringFilter<"Program"> | string;
    students?: Prisma.StudentListRelationFilter;
};
export type ProgramOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    students?: Prisma.StudentOrderByRelationAggregateInput;
};
export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    code?: string;
    AND?: Prisma.ProgramWhereInput | Prisma.ProgramWhereInput[];
    OR?: Prisma.ProgramWhereInput[];
    NOT?: Prisma.ProgramWhereInput | Prisma.ProgramWhereInput[];
    name?: Prisma.StringFilter<"Program"> | string;
    students?: Prisma.StudentListRelationFilter;
}, "id" | "code">;
export type ProgramOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.ProgramCountOrderByAggregateInput;
    _avg?: Prisma.ProgramAvgOrderByAggregateInput;
    _max?: Prisma.ProgramMaxOrderByAggregateInput;
    _min?: Prisma.ProgramMinOrderByAggregateInput;
    _sum?: Prisma.ProgramSumOrderByAggregateInput;
};
export type ProgramScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgramScalarWhereWithAggregatesInput | Prisma.ProgramScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgramScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgramScalarWhereWithAggregatesInput | Prisma.ProgramScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Program"> | number;
    code?: Prisma.StringWithAggregatesFilter<"Program"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Program"> | string;
};
export type ProgramCreateInput = {
    code: string;
    name: string;
    students?: Prisma.StudentCreateNestedManyWithoutProgramInput;
};
export type ProgramUncheckedCreateInput = {
    id?: number;
    code: string;
    name: string;
    students?: Prisma.StudentUncheckedCreateNestedManyWithoutProgramInput;
};
export type ProgramUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentUpdateManyWithoutProgramNestedInput;
};
export type ProgramUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.StudentUncheckedUpdateManyWithoutProgramNestedInput;
};
export type ProgramCreateManyInput = {
    id?: number;
    code: string;
    name: string;
};
export type ProgramUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type ProgramAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProgramMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type ProgramMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type ProgramSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProgramScalarRelationFilter = {
    is?: Prisma.ProgramWhereInput;
    isNot?: Prisma.ProgramWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProgramCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.ProgramCreateWithoutStudentsInput, Prisma.ProgramUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ProgramCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.ProgramWhereUniqueInput;
};
export type ProgramUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramCreateWithoutStudentsInput, Prisma.ProgramUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ProgramCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.ProgramUpsertWithoutStudentsInput;
    connect?: Prisma.ProgramWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgramUpdateToOneWithWhereWithoutStudentsInput, Prisma.ProgramUpdateWithoutStudentsInput>, Prisma.ProgramUncheckedUpdateWithoutStudentsInput>;
};
export type ProgramCreateWithoutStudentsInput = {
    code: string;
    name: string;
};
export type ProgramUncheckedCreateWithoutStudentsInput = {
    id?: number;
    code: string;
    name: string;
};
export type ProgramCreateOrConnectWithoutStudentsInput = {
    where: Prisma.ProgramWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramCreateWithoutStudentsInput, Prisma.ProgramUncheckedCreateWithoutStudentsInput>;
};
export type ProgramUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.ProgramUpdateWithoutStudentsInput, Prisma.ProgramUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.ProgramCreateWithoutStudentsInput, Prisma.ProgramUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.ProgramWhereInput;
};
export type ProgramUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.ProgramWhereInput;
    data: Prisma.XOR<Prisma.ProgramUpdateWithoutStudentsInput, Prisma.ProgramUncheckedUpdateWithoutStudentsInput>;
};
export type ProgramUpdateWithoutStudentsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramCountOutputType = {
    students: number;
};
export type ProgramCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | ProgramCountOutputTypeCountStudentsArgs;
};
export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramCountOutputTypeSelect<ExtArgs> | null;
};
export type ProgramCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
};
export type ProgramSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    students?: boolean | Prisma.Program$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["program"]>;
export type ProgramSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
}, ExtArgs["result"]["program"]>;
export type ProgramSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
}, ExtArgs["result"]["program"]>;
export type ProgramSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
};
export type ProgramOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["program"]>;
export type ProgramInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | Prisma.Program$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProgramIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProgramPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Program";
    objects: {
        students: Prisma.$StudentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        name: string;
    }, ExtArgs["result"]["program"]>;
    composites: {};
};
export type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgramPayload, S>;
export type ProgramCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgramCountAggregateInputType | true;
};
export interface ProgramDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Program'];
        meta: {
            name: 'Program';
        };
    };
    findUnique<T extends ProgramFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProgramFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProgramFindManyArgs>(args?: Prisma.SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProgramCreateArgs>(args: Prisma.SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProgramCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProgramDeleteArgs>(args: Prisma.SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProgramUpdateArgs>(args: Prisma.SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProgramDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProgramUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProgramUpsertArgs>(args: Prisma.SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgramClient<runtime.Types.Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProgramCountArgs>(args?: Prisma.Subset<T, ProgramCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgramCountAggregateOutputType> : number>;
    aggregate<T extends ProgramAggregateArgs>(args: Prisma.Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>;
    groupBy<T extends ProgramGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgramGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgramGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProgramFieldRefs;
}
export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    students<T extends Prisma.Program$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Program$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProgramFieldRefs {
    readonly id: Prisma.FieldRef<"Program", 'Int'>;
    readonly code: Prisma.FieldRef<"Program", 'String'>;
    readonly name: Prisma.FieldRef<"Program", 'String'>;
}
export type ProgramFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where: Prisma.ProgramWhereUniqueInput;
};
export type ProgramFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where: Prisma.ProgramWhereUniqueInput;
};
export type ProgramFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where?: Prisma.ProgramWhereInput;
    orderBy?: Prisma.ProgramOrderByWithRelationInput | Prisma.ProgramOrderByWithRelationInput[];
    cursor?: Prisma.ProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScalarFieldEnum | Prisma.ProgramScalarFieldEnum[];
};
export type ProgramFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where?: Prisma.ProgramWhereInput;
    orderBy?: Prisma.ProgramOrderByWithRelationInput | Prisma.ProgramOrderByWithRelationInput[];
    cursor?: Prisma.ProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScalarFieldEnum | Prisma.ProgramScalarFieldEnum[];
};
export type ProgramFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where?: Prisma.ProgramWhereInput;
    orderBy?: Prisma.ProgramOrderByWithRelationInput | Prisma.ProgramOrderByWithRelationInput[];
    cursor?: Prisma.ProgramWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramScalarFieldEnum | Prisma.ProgramScalarFieldEnum[];
};
export type ProgramCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramCreateInput, Prisma.ProgramUncheckedCreateInput>;
};
export type ProgramCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProgramCreateManyInput | Prisma.ProgramCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    data: Prisma.ProgramCreateManyInput | Prisma.ProgramCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProgramUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramUpdateInput, Prisma.ProgramUncheckedUpdateInput>;
    where: Prisma.ProgramWhereUniqueInput;
};
export type ProgramUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProgramUpdateManyMutationInput, Prisma.ProgramUncheckedUpdateManyInput>;
    where?: Prisma.ProgramWhereInput;
    limit?: number;
};
export type ProgramUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProgramUpdateManyMutationInput, Prisma.ProgramUncheckedUpdateManyInput>;
    where?: Prisma.ProgramWhereInput;
    limit?: number;
};
export type ProgramUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where: Prisma.ProgramWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramCreateInput, Prisma.ProgramUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProgramUpdateInput, Prisma.ProgramUncheckedUpdateInput>;
};
export type ProgramDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
    where: Prisma.ProgramWhereUniqueInput;
};
export type ProgramDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramWhereInput;
    limit?: number;
};
export type Program$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type ProgramDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProgramSelect<ExtArgs> | null;
    omit?: Prisma.ProgramOmit<ExtArgs> | null;
    include?: Prisma.ProgramInclude<ExtArgs> | null;
};
