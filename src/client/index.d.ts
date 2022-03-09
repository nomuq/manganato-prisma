
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Genres
 * 
 */
export type Genres = {
  id: number
  name: string
  mangaId: number | null
}

/**
 * Model Manga
 * 
 */
export type Manga = {
  id: number
  title: string
  description: string
  chapters: number
  createdAt: Date
  updatedAt: Date
  imageId: number
  ManganeloId: string
}

/**
 * Model Chapter
 * 
 */
export type Chapter = {
  id: number
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
  mangaId: number
}

/**
 * Model Image
 * 
 */
export type Image = {
  id: number
  url: string
  createdAt: Date
  updatedAt: Date
  chapterId: number
}

/**
 * Model Favorite
 * 
 */
export type Favorite = {
  id: number
  createdAt: Date
  updatedAt: Date
  mangaId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Genres
 * const genres = await prisma.genres.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Genres
   * const genres = await prisma.genres.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<GlobalReject>;

  /**
   * `prisma.manga`: Exposes CRUD operations for the **Manga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manga
    * const manga = await prisma.manga.findMany()
    * ```
    */
  get manga(): Prisma.MangaDelegate<GlobalReject>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.ChapterDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.10.0
   * Query Engine version: 73e60b76d394f8d37d8ebd1f8918c79029f0db86
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Genres: 'Genres',
    Manga: 'Manga',
    Chapter: 'Chapter',
    Image: 'Image',
    Favorite: 'Favorite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MangaCountOutputType
   */


  export type MangaCountOutputType = {
    Chapter: number
    Favorite: number
    Genres: number
  }

  export type MangaCountOutputTypeSelect = {
    Chapter?: boolean
    Favorite?: boolean
    Genres?: boolean
  }

  export type MangaCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MangaCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MangaCountOutputType
    : S extends undefined
    ? never
    : S extends MangaCountOutputTypeArgs
    ?'include' extends U
    ? MangaCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MangaCountOutputType ? MangaCountOutputType[P] : never
  } 
    : MangaCountOutputType
  : MangaCountOutputType




  // Custom InputTypes

  /**
   * MangaCountOutputType without action
   */
  export type MangaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MangaCountOutputType
     * 
    **/
    select?: MangaCountOutputTypeSelect | null
  }



  /**
   * Count Type ChapterCountOutputType
   */


  export type ChapterCountOutputType = {
    Images: number
  }

  export type ChapterCountOutputTypeSelect = {
    Images?: boolean
  }

  export type ChapterCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ChapterCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ChapterCountOutputType
    : S extends undefined
    ? never
    : S extends ChapterCountOutputTypeArgs
    ?'include' extends U
    ? ChapterCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ChapterCountOutputType ? ChapterCountOutputType[P] : never
  } 
    : ChapterCountOutputType
  : ChapterCountOutputType




  // Custom InputTypes

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     * 
    **/
    select?: ChapterCountOutputTypeSelect | null
  }



  /**
   * Count Type ImageCountOutputType
   */


  export type ImageCountOutputType = {
    Manga: number
  }

  export type ImageCountOutputTypeSelect = {
    Manga?: boolean
  }

  export type ImageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ImageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ImageCountOutputType
    : S extends undefined
    ? never
    : S extends ImageCountOutputTypeArgs
    ?'include' extends U
    ? ImageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ImageCountOutputType ? ImageCountOutputType[P] : never
  } 
    : ImageCountOutputType
  : ImageCountOutputType




  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     * 
    **/
    select?: ImageCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Genres
   */


  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
    mangaId: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
    mangaId: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
    mangaId: number | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
    mangaId: number | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    mangaId: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
    mangaId?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
    mangaId?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
    mangaId?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
    mangaId?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    mangaId?: true
    _all?: true
  }

  export type GenresAggregateArgs = {
    /**
     * Filter which Genres to aggregate.
     * 
    **/
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs = {
    where?: GenresWhereInput
    orderBy?: Enumerable<GenresOrderByWithAggregationInput>
    by: Array<GenresScalarFieldEnum>
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }


  export type GenresGroupByOutputType = {
    id: number
    name: string
    mangaId: number | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect = {
    id?: boolean
    name?: boolean
    Manga?: boolean | MangaArgs
    mangaId?: boolean
  }

  export type GenresInclude = {
    Manga?: boolean | MangaArgs
  }

  export type GenresGetPayload<
    S extends boolean | null | undefined | GenresArgs,
    U = keyof S
      > = S extends true
        ? Genres
    : S extends undefined
    ? never
    : S extends GenresArgs | GenresFindManyArgs
    ?'include' extends U
    ? Genres  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Manga' ? MangaGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Manga' ? MangaGetPayload<S['select'][P]> | null :  P extends keyof Genres ? Genres[P] : never
  } 
    : Genres
  : Genres


  type GenresCountArgs = Merge<
    Omit<GenresFindManyArgs, 'select' | 'include'> & {
      select?: GenresCountAggregateInputType | true
    }
  >

  export interface GenresDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenresFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenresFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genres'> extends True ? CheckSelect<T, Prisma__GenresClient<Genres>, Prisma__GenresClient<GenresGetPayload<T>>> : CheckSelect<T, Prisma__GenresClient<Genres | null >, Prisma__GenresClient<GenresGetPayload<T> | null >>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenresFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenresFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genres'> extends True ? CheckSelect<T, Prisma__GenresClient<Genres>, Prisma__GenresClient<GenresGetPayload<T>>> : CheckSelect<T, Prisma__GenresClient<Genres | null >, Prisma__GenresClient<GenresGetPayload<T> | null >>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenresFindManyArgs>(
      args?: SelectSubset<T, GenresFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Genres>>, PrismaPromise<Array<GenresGetPayload<T>>>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
    **/
    create<T extends GenresCreateArgs>(
      args: SelectSubset<T, GenresCreateArgs>
    ): CheckSelect<T, Prisma__GenresClient<Genres>, Prisma__GenresClient<GenresGetPayload<T>>>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
    **/
    delete<T extends GenresDeleteArgs>(
      args: SelectSubset<T, GenresDeleteArgs>
    ): CheckSelect<T, Prisma__GenresClient<Genres>, Prisma__GenresClient<GenresGetPayload<T>>>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenresUpdateArgs>(
      args: SelectSubset<T, GenresUpdateArgs>
    ): CheckSelect<T, Prisma__GenresClient<Genres>, Prisma__GenresClient<GenresGetPayload<T>>>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenresDeleteManyArgs>(
      args?: SelectSubset<T, GenresDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenresUpdateManyArgs>(
      args: SelectSubset<T, GenresUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
    **/
    upsert<T extends GenresUpsertArgs>(
      args: SelectSubset<T, GenresUpsertArgs>
    ): CheckSelect<T, Prisma__GenresClient<Genres>, Prisma__GenresClient<GenresGetPayload<T>>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenresClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Manga<T extends MangaArgs = {}>(args?: Subset<T, MangaArgs>): CheckSelect<T, Prisma__MangaClient<Manga | null >, Prisma__MangaClient<MangaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * Throw an Error if a Genres can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Genres to fetch.
     * 
    **/
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * Throw an Error if a Genres can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Genres to fetch.
     * 
    **/
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     * 
    **/
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     * 
    **/
    distinct?: Enumerable<GenresScalarFieldEnum>
  }


  /**
   * Genres findMany
   */
  export type GenresFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * Filter, which Genres to fetch.
     * 
    **/
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     * 
    **/
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GenresScalarFieldEnum>
  }


  /**
   * Genres create
   */
  export type GenresCreateArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * The data needed to create a Genres.
     * 
    **/
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }


  /**
   * Genres update
   */
  export type GenresUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * The data needed to update a Genres.
     * 
    **/
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     * 
    **/
    where: GenresWhereUniqueInput
  }


  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs = {
    /**
     * The data used to update Genres.
     * 
    **/
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     * 
    **/
    where?: GenresWhereInput
  }


  /**
   * Genres upsert
   */
  export type GenresUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * The filter to search for the Genres to update in case it exists.
     * 
    **/
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     * 
    **/
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }


  /**
   * Genres delete
   */
  export type GenresDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
    /**
     * Filter which Genres to delete.
     * 
    **/
    where: GenresWhereUniqueInput
  }


  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     * 
    **/
    where?: GenresWhereInput
  }


  /**
   * Genres without action
   */
  export type GenresArgs = {
    /**
     * Select specific fields to fetch from the Genres
     * 
    **/
    select?: GenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenresInclude | null
  }



  /**
   * Model Manga
   */


  export type AggregateManga = {
    _count: MangaCountAggregateOutputType | null
    _avg: MangaAvgAggregateOutputType | null
    _sum: MangaSumAggregateOutputType | null
    _min: MangaMinAggregateOutputType | null
    _max: MangaMaxAggregateOutputType | null
  }

  export type MangaAvgAggregateOutputType = {
    id: number | null
    chapters: number | null
    imageId: number | null
  }

  export type MangaSumAggregateOutputType = {
    id: number | null
    chapters: number | null
    imageId: number | null
  }

  export type MangaMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    chapters: number | null
    createdAt: Date | null
    updatedAt: Date | null
    imageId: number | null
    ManganeloId: string | null
  }

  export type MangaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    chapters: number | null
    createdAt: Date | null
    updatedAt: Date | null
    imageId: number | null
    ManganeloId: string | null
  }

  export type MangaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    chapters: number
    createdAt: number
    updatedAt: number
    imageId: number
    ManganeloId: number
    _all: number
  }


  export type MangaAvgAggregateInputType = {
    id?: true
    chapters?: true
    imageId?: true
  }

  export type MangaSumAggregateInputType = {
    id?: true
    chapters?: true
    imageId?: true
  }

  export type MangaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    chapters?: true
    createdAt?: true
    updatedAt?: true
    imageId?: true
    ManganeloId?: true
  }

  export type MangaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    chapters?: true
    createdAt?: true
    updatedAt?: true
    imageId?: true
    ManganeloId?: true
  }

  export type MangaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    chapters?: true
    createdAt?: true
    updatedAt?: true
    imageId?: true
    ManganeloId?: true
    _all?: true
  }

  export type MangaAggregateArgs = {
    /**
     * Filter which Manga to aggregate.
     * 
    **/
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     * 
    **/
    orderBy?: Enumerable<MangaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manga
    **/
    _count?: true | MangaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MangaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MangaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaMaxAggregateInputType
  }

  export type GetMangaAggregateType<T extends MangaAggregateArgs> = {
        [P in keyof T & keyof AggregateManga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManga[P]>
      : GetScalarType<T[P], AggregateManga[P]>
  }




  export type MangaGroupByArgs = {
    where?: MangaWhereInput
    orderBy?: Enumerable<MangaOrderByWithAggregationInput>
    by: Array<MangaScalarFieldEnum>
    having?: MangaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaCountAggregateInputType | true
    _avg?: MangaAvgAggregateInputType
    _sum?: MangaSumAggregateInputType
    _min?: MangaMinAggregateInputType
    _max?: MangaMaxAggregateInputType
  }


  export type MangaGroupByOutputType = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date
    updatedAt: Date
    imageId: number
    ManganeloId: string
    _count: MangaCountAggregateOutputType | null
    _avg: MangaAvgAggregateOutputType | null
    _sum: MangaSumAggregateOutputType | null
    _min: MangaMinAggregateOutputType | null
    _max: MangaMaxAggregateOutputType | null
  }

  type GetMangaGroupByPayload<T extends MangaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MangaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaGroupByOutputType[P]>
            : GetScalarType<T[P], MangaGroupByOutputType[P]>
        }
      >
    >


  export type MangaSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    chapters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chapter?: boolean | ChapterFindManyArgs
    Favorite?: boolean | FavoriteFindManyArgs
    Genres?: boolean | GenresFindManyArgs
    Image?: boolean | ImageArgs
    imageId?: boolean
    ManganeloId?: boolean
    _count?: boolean | MangaCountOutputTypeArgs
  }

  export type MangaInclude = {
    Chapter?: boolean | ChapterFindManyArgs
    Favorite?: boolean | FavoriteFindManyArgs
    Genres?: boolean | GenresFindManyArgs
    Image?: boolean | ImageArgs
    _count?: boolean | MangaCountOutputTypeArgs
  }

  export type MangaGetPayload<
    S extends boolean | null | undefined | MangaArgs,
    U = keyof S
      > = S extends true
        ? Manga
    : S extends undefined
    ? never
    : S extends MangaArgs | MangaFindManyArgs
    ?'include' extends U
    ? Manga  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Chapter' ? Array < ChapterGetPayload<S['include'][P]>>  :
        P extends 'Favorite' ? Array < FavoriteGetPayload<S['include'][P]>>  :
        P extends 'Genres' ? Array < GenresGetPayload<S['include'][P]>>  :
        P extends 'Image' ? ImageGetPayload<S['include'][P]> :
        P extends '_count' ? MangaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Chapter' ? Array < ChapterGetPayload<S['select'][P]>>  :
        P extends 'Favorite' ? Array < FavoriteGetPayload<S['select'][P]>>  :
        P extends 'Genres' ? Array < GenresGetPayload<S['select'][P]>>  :
        P extends 'Image' ? ImageGetPayload<S['select'][P]> :
        P extends '_count' ? MangaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Manga ? Manga[P] : never
  } 
    : Manga
  : Manga


  type MangaCountArgs = Merge<
    Omit<MangaFindManyArgs, 'select' | 'include'> & {
      select?: MangaCountAggregateInputType | true
    }
  >

  export interface MangaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Manga that matches the filter.
     * @param {MangaFindUniqueArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MangaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MangaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Manga'> extends True ? CheckSelect<T, Prisma__MangaClient<Manga>, Prisma__MangaClient<MangaGetPayload<T>>> : CheckSelect<T, Prisma__MangaClient<Manga | null >, Prisma__MangaClient<MangaGetPayload<T> | null >>

    /**
     * Find the first Manga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindFirstArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MangaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MangaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Manga'> extends True ? CheckSelect<T, Prisma__MangaClient<Manga>, Prisma__MangaClient<MangaGetPayload<T>>> : CheckSelect<T, Prisma__MangaClient<Manga | null >, Prisma__MangaClient<MangaGetPayload<T> | null >>

    /**
     * Find zero or more Manga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manga
     * const manga = await prisma.manga.findMany()
     * 
     * // Get first 10 Manga
     * const manga = await prisma.manga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaWithIdOnly = await prisma.manga.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MangaFindManyArgs>(
      args?: SelectSubset<T, MangaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Manga>>, PrismaPromise<Array<MangaGetPayload<T>>>>

    /**
     * Create a Manga.
     * @param {MangaCreateArgs} args - Arguments to create a Manga.
     * @example
     * // Create one Manga
     * const Manga = await prisma.manga.create({
     *   data: {
     *     // ... data to create a Manga
     *   }
     * })
     * 
    **/
    create<T extends MangaCreateArgs>(
      args: SelectSubset<T, MangaCreateArgs>
    ): CheckSelect<T, Prisma__MangaClient<Manga>, Prisma__MangaClient<MangaGetPayload<T>>>

    /**
     * Delete a Manga.
     * @param {MangaDeleteArgs} args - Arguments to delete one Manga.
     * @example
     * // Delete one Manga
     * const Manga = await prisma.manga.delete({
     *   where: {
     *     // ... filter to delete one Manga
     *   }
     * })
     * 
    **/
    delete<T extends MangaDeleteArgs>(
      args: SelectSubset<T, MangaDeleteArgs>
    ): CheckSelect<T, Prisma__MangaClient<Manga>, Prisma__MangaClient<MangaGetPayload<T>>>

    /**
     * Update one Manga.
     * @param {MangaUpdateArgs} args - Arguments to update one Manga.
     * @example
     * // Update one Manga
     * const manga = await prisma.manga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MangaUpdateArgs>(
      args: SelectSubset<T, MangaUpdateArgs>
    ): CheckSelect<T, Prisma__MangaClient<Manga>, Prisma__MangaClient<MangaGetPayload<T>>>

    /**
     * Delete zero or more Manga.
     * @param {MangaDeleteManyArgs} args - Arguments to filter Manga to delete.
     * @example
     * // Delete a few Manga
     * const { count } = await prisma.manga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MangaDeleteManyArgs>(
      args?: SelectSubset<T, MangaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manga
     * const manga = await prisma.manga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MangaUpdateManyArgs>(
      args: SelectSubset<T, MangaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Manga.
     * @param {MangaUpsertArgs} args - Arguments to update or create a Manga.
     * @example
     * // Update or create a Manga
     * const manga = await prisma.manga.upsert({
     *   create: {
     *     // ... data to create a Manga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manga we want to update
     *   }
     * })
    **/
    upsert<T extends MangaUpsertArgs>(
      args: SelectSubset<T, MangaUpsertArgs>
    ): CheckSelect<T, Prisma__MangaClient<Manga>, Prisma__MangaClient<MangaGetPayload<T>>>

    /**
     * Count the number of Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaCountArgs} args - Arguments to filter Manga to count.
     * @example
     * // Count the number of Manga
     * const count = await prisma.manga.count({
     *   where: {
     *     // ... the filter for the Manga we want to count
     *   }
     * })
    **/
    count<T extends MangaCountArgs>(
      args?: Subset<T, MangaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MangaAggregateArgs>(args: Subset<T, MangaAggregateArgs>): PrismaPromise<GetMangaAggregateType<T>>

    /**
     * Group by Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MangaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaGroupByArgs['orderBy'] }
        : { orderBy?: MangaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MangaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MangaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Chapter<T extends ChapterFindManyArgs = {}>(args?: Subset<T, ChapterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Chapter>>, PrismaPromise<Array<ChapterGetPayload<T>>>>;

    Favorite<T extends FavoriteFindManyArgs = {}>(args?: Subset<T, FavoriteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Favorite>>, PrismaPromise<Array<FavoriteGetPayload<T>>>>;

    Genres<T extends GenresFindManyArgs = {}>(args?: Subset<T, GenresFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Genres>>, PrismaPromise<Array<GenresGetPayload<T>>>>;

    Image<T extends ImageArgs = {}>(args?: Subset<T, ImageArgs>): CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Manga findUnique
   */
  export type MangaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * Throw an Error if a Manga can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Manga to fetch.
     * 
    **/
    where: MangaWhereUniqueInput
  }


  /**
   * Manga findFirst
   */
  export type MangaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * Throw an Error if a Manga can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Manga to fetch.
     * 
    **/
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     * 
    **/
    orderBy?: Enumerable<MangaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manga.
     * 
    **/
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manga.
     * 
    **/
    distinct?: Enumerable<MangaScalarFieldEnum>
  }


  /**
   * Manga findMany
   */
  export type MangaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * Filter, which Manga to fetch.
     * 
    **/
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     * 
    **/
    orderBy?: Enumerable<MangaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manga.
     * 
    **/
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MangaScalarFieldEnum>
  }


  /**
   * Manga create
   */
  export type MangaCreateArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * The data needed to create a Manga.
     * 
    **/
    data: XOR<MangaCreateInput, MangaUncheckedCreateInput>
  }


  /**
   * Manga update
   */
  export type MangaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * The data needed to update a Manga.
     * 
    **/
    data: XOR<MangaUpdateInput, MangaUncheckedUpdateInput>
    /**
     * Choose, which Manga to update.
     * 
    **/
    where: MangaWhereUniqueInput
  }


  /**
   * Manga updateMany
   */
  export type MangaUpdateManyArgs = {
    /**
     * The data used to update Manga.
     * 
    **/
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyInput>
    /**
     * Filter which Manga to update
     * 
    **/
    where?: MangaWhereInput
  }


  /**
   * Manga upsert
   */
  export type MangaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * The filter to search for the Manga to update in case it exists.
     * 
    **/
    where: MangaWhereUniqueInput
    /**
     * In case the Manga found by the `where` argument doesn't exist, create a new Manga with this data.
     * 
    **/
    create: XOR<MangaCreateInput, MangaUncheckedCreateInput>
    /**
     * In case the Manga was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MangaUpdateInput, MangaUncheckedUpdateInput>
  }


  /**
   * Manga delete
   */
  export type MangaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
    /**
     * Filter which Manga to delete.
     * 
    **/
    where: MangaWhereUniqueInput
  }


  /**
   * Manga deleteMany
   */
  export type MangaDeleteManyArgs = {
    /**
     * Filter which Manga to delete
     * 
    **/
    where?: MangaWhereInput
  }


  /**
   * Manga without action
   */
  export type MangaArgs = {
    /**
     * Select specific fields to fetch from the Manga
     * 
    **/
    select?: MangaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MangaInclude | null
  }



  /**
   * Model Chapter
   */


  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    id: number | null
    mangaId: number | null
  }

  export type ChapterSumAggregateOutputType = {
    id: number | null
    mangaId: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mangaId: number | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    mangaId: number | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    mangaId: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    id?: true
    mangaId?: true
  }

  export type ChapterSumAggregateInputType = {
    id?: true
    mangaId?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    mangaId?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    mangaId?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    mangaId?: true
    _all?: true
  }

  export type ChapterAggregateArgs = {
    /**
     * Filter which Chapter to aggregate.
     * 
    **/
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     * 
    **/
    orderBy?: Enumerable<ChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type ChapterGroupByArgs = {
    where?: ChapterWhereInput
    orderBy?: Enumerable<ChapterOrderByWithAggregationInput>
    by: Array<ChapterScalarFieldEnum>
    having?: ChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }


  export type ChapterGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    mangaId: number
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type ChapterSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Images?: boolean | ImageFindManyArgs
    manga?: boolean | MangaArgs
    mangaId?: boolean
    _count?: boolean | ChapterCountOutputTypeArgs
  }

  export type ChapterInclude = {
    Images?: boolean | ImageFindManyArgs
    manga?: boolean | MangaArgs
    _count?: boolean | ChapterCountOutputTypeArgs
  }

  export type ChapterGetPayload<
    S extends boolean | null | undefined | ChapterArgs,
    U = keyof S
      > = S extends true
        ? Chapter
    : S extends undefined
    ? never
    : S extends ChapterArgs | ChapterFindManyArgs
    ?'include' extends U
    ? Chapter  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Images' ? Array < ImageGetPayload<S['include'][P]>>  :
        P extends 'manga' ? MangaGetPayload<S['include'][P]> :
        P extends '_count' ? ChapterCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Images' ? Array < ImageGetPayload<S['select'][P]>>  :
        P extends 'manga' ? MangaGetPayload<S['select'][P]> :
        P extends '_count' ? ChapterCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Chapter ? Chapter[P] : never
  } 
    : Chapter
  : Chapter


  type ChapterCountArgs = Merge<
    Omit<ChapterFindManyArgs, 'select' | 'include'> & {
      select?: ChapterCountAggregateInputType | true
    }
  >

  export interface ChapterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChapterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChapterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chapter'> extends True ? CheckSelect<T, Prisma__ChapterClient<Chapter>, Prisma__ChapterClient<ChapterGetPayload<T>>> : CheckSelect<T, Prisma__ChapterClient<Chapter | null >, Prisma__ChapterClient<ChapterGetPayload<T> | null >>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChapterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChapterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chapter'> extends True ? CheckSelect<T, Prisma__ChapterClient<Chapter>, Prisma__ChapterClient<ChapterGetPayload<T>>> : CheckSelect<T, Prisma__ChapterClient<Chapter | null >, Prisma__ChapterClient<ChapterGetPayload<T> | null >>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChapterFindManyArgs>(
      args?: SelectSubset<T, ChapterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Chapter>>, PrismaPromise<Array<ChapterGetPayload<T>>>>

    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
    **/
    create<T extends ChapterCreateArgs>(
      args: SelectSubset<T, ChapterCreateArgs>
    ): CheckSelect<T, Prisma__ChapterClient<Chapter>, Prisma__ChapterClient<ChapterGetPayload<T>>>

    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
    **/
    delete<T extends ChapterDeleteArgs>(
      args: SelectSubset<T, ChapterDeleteArgs>
    ): CheckSelect<T, Prisma__ChapterClient<Chapter>, Prisma__ChapterClient<ChapterGetPayload<T>>>

    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChapterUpdateArgs>(
      args: SelectSubset<T, ChapterUpdateArgs>
    ): CheckSelect<T, Prisma__ChapterClient<Chapter>, Prisma__ChapterClient<ChapterGetPayload<T>>>

    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChapterDeleteManyArgs>(
      args?: SelectSubset<T, ChapterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChapterUpdateManyArgs>(
      args: SelectSubset<T, ChapterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
    **/
    upsert<T extends ChapterUpsertArgs>(
      args: SelectSubset<T, ChapterUpsertArgs>
    ): CheckSelect<T, Prisma__ChapterClient<Chapter>, Prisma__ChapterClient<ChapterGetPayload<T>>>

    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(
      args?: Subset<T, ChapterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChapterGroupByArgs['orderBy'] }
        : { orderBy?: ChapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChapterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Images<T extends ImageFindManyArgs = {}>(args?: Subset<T, ImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>;

    manga<T extends MangaArgs = {}>(args?: Subset<T, MangaArgs>): CheckSelect<T, Prisma__MangaClient<Manga | null >, Prisma__MangaClient<MangaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Chapter findUnique
   */
  export type ChapterFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * Throw an Error if a Chapter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Chapter to fetch.
     * 
    **/
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter findFirst
   */
  export type ChapterFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * Throw an Error if a Chapter can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Chapter to fetch.
     * 
    **/
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     * 
    **/
    orderBy?: Enumerable<ChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chapters.
     * 
    **/
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chapters.
     * 
    **/
    distinct?: Enumerable<ChapterScalarFieldEnum>
  }


  /**
   * Chapter findMany
   */
  export type ChapterFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * Filter, which Chapters to fetch.
     * 
    **/
    where?: ChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chapters to fetch.
     * 
    **/
    orderBy?: Enumerable<ChapterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chapters.
     * 
    **/
    cursor?: ChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chapters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chapters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ChapterScalarFieldEnum>
  }


  /**
   * Chapter create
   */
  export type ChapterCreateArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * The data needed to create a Chapter.
     * 
    **/
    data: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
  }


  /**
   * Chapter update
   */
  export type ChapterUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * The data needed to update a Chapter.
     * 
    **/
    data: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
    /**
     * Choose, which Chapter to update.
     * 
    **/
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter updateMany
   */
  export type ChapterUpdateManyArgs = {
    /**
     * The data used to update Chapters.
     * 
    **/
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyInput>
    /**
     * Filter which Chapters to update
     * 
    **/
    where?: ChapterWhereInput
  }


  /**
   * Chapter upsert
   */
  export type ChapterUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * The filter to search for the Chapter to update in case it exists.
     * 
    **/
    where: ChapterWhereUniqueInput
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     * 
    **/
    create: XOR<ChapterCreateInput, ChapterUncheckedCreateInput>
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ChapterUpdateInput, ChapterUncheckedUpdateInput>
  }


  /**
   * Chapter delete
   */
  export type ChapterDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
    /**
     * Filter which Chapter to delete.
     * 
    **/
    where: ChapterWhereUniqueInput
  }


  /**
   * Chapter deleteMany
   */
  export type ChapterDeleteManyArgs = {
    /**
     * Filter which Chapters to delete
     * 
    **/
    where?: ChapterWhereInput
  }


  /**
   * Chapter without action
   */
  export type ChapterArgs = {
    /**
     * Select specific fields to fetch from the Chapter
     * 
    **/
    select?: ChapterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ChapterInclude | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    chapterId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    chapterId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chapterId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
    chapterId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    updatedAt: number
    chapterId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    chapterId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    chapterId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    chapterId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    chapterId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    chapterId?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: Array<ImageScalarFieldEnum>
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: number
    url: string
    createdAt: Date
    updatedAt: Date
    chapterId: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chapter?: boolean | ChapterArgs
    chapterId?: boolean
    Manga?: boolean | MangaFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageInclude = {
    chapter?: boolean | ChapterArgs
    Manga?: boolean | MangaFindManyArgs
    _count?: boolean | ImageCountOutputTypeArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]:
        P extends 'chapter' ? ChapterGetPayload<S['include'][P]> :
        P extends 'Manga' ? Array < MangaGetPayload<S['include'][P]>>  :
        P extends '_count' ? ImageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'chapter' ? ChapterGetPayload<S['select'][P]> :
        P extends 'Manga' ? Array < MangaGetPayload<S['select'][P]>>  :
        P extends '_count' ? ImageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Image ? Image[P] : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    chapter<T extends ChapterArgs = {}>(args?: Subset<T, ChapterArgs>): CheckSelect<T, Prisma__ChapterClient<Chapter | null >, Prisma__ChapterClient<ChapterGetPayload<T> | null >>;

    Manga<T extends MangaFindManyArgs = {}>(args?: Subset<T, MangaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Manga>>, PrismaPromise<Array<MangaGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Throw an Error if a Image can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     * 
    **/
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     * 
    **/
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    /**
     * The data used to update Images.
     * 
    **/
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     * 
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     * 
    **/
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    /**
     * Filter which Images to delete
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
  }



  /**
   * Model Favorite
   */


  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    mangaId: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    mangaId: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mangaId: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mangaId: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    mangaId: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    mangaId?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    mangaId?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mangaId?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mangaId?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mangaId?: true
    _all?: true
  }

  export type FavoriteAggregateArgs = {
    /**
     * Filter which Favorite to aggregate.
     * 
    **/
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs = {
    where?: FavoriteWhereInput
    orderBy?: Enumerable<FavoriteOrderByWithAggregationInput>
    by: Array<FavoriteScalarFieldEnum>
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }


  export type FavoriteGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    mangaId: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manga?: boolean | MangaArgs
    mangaId?: boolean
  }

  export type FavoriteInclude = {
    manga?: boolean | MangaArgs
  }

  export type FavoriteGetPayload<
    S extends boolean | null | undefined | FavoriteArgs,
    U = keyof S
      > = S extends true
        ? Favorite
    : S extends undefined
    ? never
    : S extends FavoriteArgs | FavoriteFindManyArgs
    ?'include' extends U
    ? Favorite  & {
    [P in TrueKeys<S['include']>]:
        P extends 'manga' ? MangaGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'manga' ? MangaGetPayload<S['select'][P]> :  P extends keyof Favorite ? Favorite[P] : never
  } 
    : Favorite
  : Favorite


  type FavoriteCountArgs = Merge<
    Omit<FavoriteFindManyArgs, 'select' | 'include'> & {
      select?: FavoriteCountAggregateInputType | true
    }
  >

  export interface FavoriteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FavoriteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Favorite'> extends True ? CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>> : CheckSelect<T, Prisma__FavoriteClient<Favorite | null >, Prisma__FavoriteClient<FavoriteGetPayload<T> | null >>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FavoriteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Favorite'> extends True ? CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>> : CheckSelect<T, Prisma__FavoriteClient<Favorite | null >, Prisma__FavoriteClient<FavoriteGetPayload<T> | null >>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FavoriteFindManyArgs>(
      args?: SelectSubset<T, FavoriteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Favorite>>, PrismaPromise<Array<FavoriteGetPayload<T>>>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
    **/
    create<T extends FavoriteCreateArgs>(
      args: SelectSubset<T, FavoriteCreateArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteDeleteArgs>(
      args: SelectSubset<T, FavoriteDeleteArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteUpdateArgs>(
      args: SelectSubset<T, FavoriteUpdateArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteDeleteManyArgs>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteUpdateManyArgs>(
      args: SelectSubset<T, FavoriteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteUpsertArgs>(
      args: SelectSubset<T, FavoriteUpsertArgs>
    ): CheckSelect<T, Prisma__FavoriteClient<Favorite>, Prisma__FavoriteClient<FavoriteGetPayload<T>>>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FavoriteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    manga<T extends MangaArgs = {}>(args?: Subset<T, MangaArgs>): CheckSelect<T, Prisma__MangaClient<Manga | null >, Prisma__MangaClient<MangaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Throw an Error if a Favorite can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Favorite to fetch.
     * 
    **/
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Throw an Error if a Favorite can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Favorite to fetch.
     * 
    **/
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     * 
    **/
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     * 
    **/
    distinct?: Enumerable<FavoriteScalarFieldEnum>
  }


  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Filter, which Favorites to fetch.
     * 
    **/
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     * 
    **/
    orderBy?: Enumerable<FavoriteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     * 
    **/
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FavoriteScalarFieldEnum>
  }


  /**
   * Favorite create
   */
  export type FavoriteCreateArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * The data needed to create a Favorite.
     * 
    **/
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }


  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * The data needed to update a Favorite.
     * 
    **/
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     * 
    **/
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs = {
    /**
     * The data used to update Favorites.
     * 
    **/
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     * 
    **/
    where?: FavoriteWhereInput
  }


  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     * 
    **/
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     * 
    **/
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }


  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
    /**
     * Filter which Favorite to delete.
     * 
    **/
    where: FavoriteWhereUniqueInput
  }


  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs = {
    /**
     * Filter which Favorites to delete
     * 
    **/
    where?: FavoriteWhereInput
  }


  /**
   * Favorite without action
   */
  export type FavoriteArgs = {
    /**
     * Select specific fields to fetch from the Favorite
     * 
    **/
    select?: FavoriteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FavoriteInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mangaId: 'mangaId'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const MangaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    chapters: 'chapters',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageId: 'imageId',
    ManganeloId: 'ManganeloId'
  };

  export type MangaScalarFieldEnum = (typeof MangaScalarFieldEnum)[keyof typeof MangaScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mangaId: 'mangaId'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chapterId: 'chapterId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mangaId: 'mangaId'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type GenresWhereInput = {
    AND?: Enumerable<GenresWhereInput>
    OR?: Enumerable<GenresWhereInput>
    NOT?: Enumerable<GenresWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    Manga?: XOR<MangaRelationFilter, MangaWhereInput> | null
    mangaId?: IntNullableFilter | number | null
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Manga?: MangaOrderByWithRelationInput
    mangaId?: SortOrder
  }

  export type GenresWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mangaId?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _avg?: GenresAvgOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
    _sum?: GenresSumOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenresScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenresScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenresScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    mangaId?: IntNullableWithAggregatesFilter | number | null
  }

  export type MangaWhereInput = {
    AND?: Enumerable<MangaWhereInput>
    OR?: Enumerable<MangaWhereInput>
    NOT?: Enumerable<MangaWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    chapters?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Chapter?: ChapterListRelationFilter
    Favorite?: FavoriteListRelationFilter
    Genres?: GenresListRelationFilter
    Image?: XOR<ImageRelationFilter, ImageWhereInput>
    imageId?: IntFilter | number
    ManganeloId?: StringFilter | string
  }

  export type MangaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Chapter?: ChapterOrderByRelationAggregateInput
    Favorite?: FavoriteOrderByRelationAggregateInput
    Genres?: GenresOrderByRelationAggregateInput
    Image?: ImageOrderByWithRelationInput
    imageId?: SortOrder
    ManganeloId?: SortOrder
  }

  export type MangaWhereUniqueInput = {
    id?: number
    title?: string
    ManganeloId?: string
  }

  export type MangaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    ManganeloId?: SortOrder
    _count?: MangaCountOrderByAggregateInput
    _avg?: MangaAvgOrderByAggregateInput
    _max?: MangaMaxOrderByAggregateInput
    _min?: MangaMinOrderByAggregateInput
    _sum?: MangaSumOrderByAggregateInput
  }

  export type MangaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MangaScalarWhereWithAggregatesInput>
    OR?: Enumerable<MangaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MangaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    chapters?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    imageId?: IntWithAggregatesFilter | number
    ManganeloId?: StringWithAggregatesFilter | string
  }

  export type ChapterWhereInput = {
    AND?: Enumerable<ChapterWhereInput>
    OR?: Enumerable<ChapterWhereInput>
    NOT?: Enumerable<ChapterWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Images?: ImageListRelationFilter
    manga?: XOR<MangaRelationFilter, MangaWhereInput>
    mangaId?: IntFilter | number
  }

  export type ChapterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Images?: ImageOrderByRelationAggregateInput
    manga?: MangaOrderByWithRelationInput
    mangaId?: SortOrder
  }

  export type ChapterWhereUniqueInput = {
    id?: number
  }

  export type ChapterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
    _count?: ChapterCountOrderByAggregateInput
    _avg?: ChapterAvgOrderByAggregateInput
    _max?: ChapterMaxOrderByAggregateInput
    _min?: ChapterMinOrderByAggregateInput
    _sum?: ChapterSumOrderByAggregateInput
  }

  export type ChapterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChapterScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChapterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChapterScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    mangaId?: IntWithAggregatesFilter | number
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    chapter?: XOR<ChapterRelationFilter, ChapterWhereInput>
    chapterId?: IntFilter | number
    Manga?: MangaListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapter?: ChapterOrderByWithRelationInput
    chapterId?: SortOrder
    Manga?: MangaOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = {
    id?: number
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapterId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    chapterId?: IntWithAggregatesFilter | number
  }

  export type FavoriteWhereInput = {
    AND?: Enumerable<FavoriteWhereInput>
    OR?: Enumerable<FavoriteWhereInput>
    NOT?: Enumerable<FavoriteWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    manga?: XOR<MangaRelationFilter, MangaWhereInput>
    mangaId?: IntFilter | number
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    manga?: MangaOrderByWithRelationInput
    mangaId?: SortOrder
  }

  export type FavoriteWhereUniqueInput = {
    id?: number
  }

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _avg?: FavoriteAvgOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
    _sum?: FavoriteSumOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FavoriteScalarWhereWithAggregatesInput>
    OR?: Enumerable<FavoriteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FavoriteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    mangaId?: IntWithAggregatesFilter | number
  }

  export type GenresCreateInput = {
    id: number
    name: string
    Manga?: MangaCreateNestedOneWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    id: number
    name: string
    mangaId?: number | null
  }

  export type GenresUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Manga?: MangaUpdateOneWithoutGenresInput
  }

  export type GenresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mangaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GenresUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    mangaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MangaCreateInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterCreateNestedManyWithoutMangaInput
    Favorite?: FavoriteCreateNestedManyWithoutMangaInput
    Genres?: GenresCreateNestedManyWithoutMangaInput
    Image: ImageCreateNestedOneWithoutMangaInput
    ManganeloId: string
  }

  export type MangaUncheckedCreateInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterUncheckedCreateNestedManyWithoutMangaInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMangaInput
    Genres?: GenresUncheckedCreateNestedManyWithoutMangaInput
    imageId: number
    ManganeloId: string
  }

  export type MangaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUpdateManyWithoutMangaInput
    Favorite?: FavoriteUpdateManyWithoutMangaInput
    Genres?: GenresUpdateManyWithoutMangaInput
    Image?: ImageUpdateOneRequiredWithoutMangaInput
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUncheckedUpdateManyWithoutMangaInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutMangaInput
    Genres?: GenresUncheckedUpdateManyWithoutMangaInput
    imageId?: IntFieldUpdateOperationsInput | number
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageId?: IntFieldUpdateOperationsInput | number
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateInput = {
    id: number
    title: string
    description: string
    createdAt: Date | string
    updatedAt: Date | string
    Images?: ImageCreateNestedManyWithoutChapterInput
    manga: MangaCreateNestedOneWithoutChapterInput
  }

  export type ChapterUncheckedCreateInput = {
    id: number
    title: string
    description: string
    createdAt: Date | string
    updatedAt: Date | string
    Images?: ImageUncheckedCreateNestedManyWithoutChapterInput
    mangaId: number
  }

  export type ChapterUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImageUpdateManyWithoutChapterInput
    manga?: MangaUpdateOneRequiredWithoutChapterInput
  }

  export type ChapterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImageUncheckedUpdateManyWithoutChapterInput
    mangaId?: IntFieldUpdateOperationsInput | number
  }

  export type ChapterUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChapterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateInput = {
    id: number
    url: string
    createdAt: Date | string
    updatedAt: Date | string
    chapter: ChapterCreateNestedOneWithoutImagesInput
    Manga?: MangaCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id: number
    url: string
    createdAt: Date | string
    updatedAt: Date | string
    chapterId: number
    Manga?: MangaUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutImagesInput
    Manga?: MangaUpdateManyWithoutImageInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: IntFieldUpdateOperationsInput | number
    Manga?: MangaUncheckedUpdateManyWithoutImageInput
  }

  export type ImageUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteCreateInput = {
    id: number
    createdAt: Date | string
    updatedAt: Date | string
    manga: MangaCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateInput = {
    id: number
    createdAt: Date | string
    updatedAt: Date | string
    mangaId: number
  }

  export type FavoriteUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manga?: MangaUpdateOneRequiredWithoutFavoriteInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type MangaRelationFilter = {
    is?: MangaWhereInput
    isNot?: MangaWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mangaId?: SortOrder
  }

  export type GenresAvgOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mangaId?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mangaId?: SortOrder
  }

  export type GenresSumOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ChapterListRelationFilter = {
    every?: ChapterWhereInput
    some?: ChapterWhereInput
    none?: ChapterWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type GenresListRelationFilter = {
    every?: GenresWhereInput
    some?: GenresWhereInput
    none?: GenresWhereInput
  }

  export type ImageRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type ChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    ManganeloId?: SortOrder
  }

  export type MangaAvgOrderByAggregateInput = {
    id?: SortOrder
    chapters?: SortOrder
    imageId?: SortOrder
  }

  export type MangaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    ManganeloId?: SortOrder
  }

  export type MangaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    chapters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageId?: SortOrder
    ManganeloId?: SortOrder
  }

  export type MangaSumOrderByAggregateInput = {
    id?: SortOrder
    chapters?: SortOrder
    imageId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChapterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
  }

  export type ChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
  }

  export type ChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
  }

  export type ChapterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
  }

  export type ChapterSumOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
  }

  export type ChapterRelationFilter = {
    is?: ChapterWhereInput
    isNot?: ChapterWhereInput
  }

  export type MangaListRelationFilter = {
    every?: MangaWhereInput
    some?: MangaWhereInput
    none?: MangaWhereInput
  }

  export type MangaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapterId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapterId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chapterId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    chapterId?: SortOrder
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
  }

  export type FavoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mangaId?: SortOrder
  }

  export type FavoriteSumOrderByAggregateInput = {
    id?: SortOrder
    mangaId?: SortOrder
  }

  export type MangaCreateNestedOneWithoutGenresInput = {
    create?: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MangaCreateOrConnectWithoutGenresInput
    connect?: MangaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MangaUpdateOneWithoutGenresInput = {
    create?: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MangaCreateOrConnectWithoutGenresInput
    upsert?: MangaUpsertWithoutGenresInput
    disconnect?: boolean
    delete?: boolean
    connect?: MangaWhereUniqueInput
    update?: XOR<MangaUpdateWithoutGenresInput, MangaUncheckedUpdateWithoutGenresInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChapterCreateNestedManyWithoutMangaInput = {
    create?: XOR<Enumerable<ChapterCreateWithoutMangaInput>, Enumerable<ChapterUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<ChapterCreateOrConnectWithoutMangaInput>
    connect?: Enumerable<ChapterWhereUniqueInput>
  }

  export type FavoriteCreateNestedManyWithoutMangaInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutMangaInput>, Enumerable<FavoriteUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutMangaInput>
    connect?: Enumerable<FavoriteWhereUniqueInput>
  }

  export type GenresCreateNestedManyWithoutMangaInput = {
    create?: XOR<Enumerable<GenresCreateWithoutMangaInput>, Enumerable<GenresUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<GenresCreateOrConnectWithoutMangaInput>
    connect?: Enumerable<GenresWhereUniqueInput>
  }

  export type ImageCreateNestedOneWithoutMangaInput = {
    create?: XOR<ImageCreateWithoutMangaInput, ImageUncheckedCreateWithoutMangaInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMangaInput
    connect?: ImageWhereUniqueInput
  }

  export type ChapterUncheckedCreateNestedManyWithoutMangaInput = {
    create?: XOR<Enumerable<ChapterCreateWithoutMangaInput>, Enumerable<ChapterUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<ChapterCreateOrConnectWithoutMangaInput>
    connect?: Enumerable<ChapterWhereUniqueInput>
  }

  export type FavoriteUncheckedCreateNestedManyWithoutMangaInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutMangaInput>, Enumerable<FavoriteUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutMangaInput>
    connect?: Enumerable<FavoriteWhereUniqueInput>
  }

  export type GenresUncheckedCreateNestedManyWithoutMangaInput = {
    create?: XOR<Enumerable<GenresCreateWithoutMangaInput>, Enumerable<GenresUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<GenresCreateOrConnectWithoutMangaInput>
    connect?: Enumerable<GenresWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChapterUpdateManyWithoutMangaInput = {
    create?: XOR<Enumerable<ChapterCreateWithoutMangaInput>, Enumerable<ChapterUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<ChapterCreateOrConnectWithoutMangaInput>
    upsert?: Enumerable<ChapterUpsertWithWhereUniqueWithoutMangaInput>
    set?: Enumerable<ChapterWhereUniqueInput>
    disconnect?: Enumerable<ChapterWhereUniqueInput>
    delete?: Enumerable<ChapterWhereUniqueInput>
    connect?: Enumerable<ChapterWhereUniqueInput>
    update?: Enumerable<ChapterUpdateWithWhereUniqueWithoutMangaInput>
    updateMany?: Enumerable<ChapterUpdateManyWithWhereWithoutMangaInput>
    deleteMany?: Enumerable<ChapterScalarWhereInput>
  }

  export type FavoriteUpdateManyWithoutMangaInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutMangaInput>, Enumerable<FavoriteUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutMangaInput>
    upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutMangaInput>
    set?: Enumerable<FavoriteWhereUniqueInput>
    disconnect?: Enumerable<FavoriteWhereUniqueInput>
    delete?: Enumerable<FavoriteWhereUniqueInput>
    connect?: Enumerable<FavoriteWhereUniqueInput>
    update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutMangaInput>
    updateMany?: Enumerable<FavoriteUpdateManyWithWhereWithoutMangaInput>
    deleteMany?: Enumerable<FavoriteScalarWhereInput>
  }

  export type GenresUpdateManyWithoutMangaInput = {
    create?: XOR<Enumerable<GenresCreateWithoutMangaInput>, Enumerable<GenresUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<GenresCreateOrConnectWithoutMangaInput>
    upsert?: Enumerable<GenresUpsertWithWhereUniqueWithoutMangaInput>
    set?: Enumerable<GenresWhereUniqueInput>
    disconnect?: Enumerable<GenresWhereUniqueInput>
    delete?: Enumerable<GenresWhereUniqueInput>
    connect?: Enumerable<GenresWhereUniqueInput>
    update?: Enumerable<GenresUpdateWithWhereUniqueWithoutMangaInput>
    updateMany?: Enumerable<GenresUpdateManyWithWhereWithoutMangaInput>
    deleteMany?: Enumerable<GenresScalarWhereInput>
  }

  export type ImageUpdateOneRequiredWithoutMangaInput = {
    create?: XOR<ImageCreateWithoutMangaInput, ImageUncheckedCreateWithoutMangaInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMangaInput
    upsert?: ImageUpsertWithoutMangaInput
    connect?: ImageWhereUniqueInput
    update?: XOR<ImageUpdateWithoutMangaInput, ImageUncheckedUpdateWithoutMangaInput>
  }

  export type ChapterUncheckedUpdateManyWithoutMangaInput = {
    create?: XOR<Enumerable<ChapterCreateWithoutMangaInput>, Enumerable<ChapterUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<ChapterCreateOrConnectWithoutMangaInput>
    upsert?: Enumerable<ChapterUpsertWithWhereUniqueWithoutMangaInput>
    set?: Enumerable<ChapterWhereUniqueInput>
    disconnect?: Enumerable<ChapterWhereUniqueInput>
    delete?: Enumerable<ChapterWhereUniqueInput>
    connect?: Enumerable<ChapterWhereUniqueInput>
    update?: Enumerable<ChapterUpdateWithWhereUniqueWithoutMangaInput>
    updateMany?: Enumerable<ChapterUpdateManyWithWhereWithoutMangaInput>
    deleteMany?: Enumerable<ChapterScalarWhereInput>
  }

  export type FavoriteUncheckedUpdateManyWithoutMangaInput = {
    create?: XOR<Enumerable<FavoriteCreateWithoutMangaInput>, Enumerable<FavoriteUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<FavoriteCreateOrConnectWithoutMangaInput>
    upsert?: Enumerable<FavoriteUpsertWithWhereUniqueWithoutMangaInput>
    set?: Enumerable<FavoriteWhereUniqueInput>
    disconnect?: Enumerable<FavoriteWhereUniqueInput>
    delete?: Enumerable<FavoriteWhereUniqueInput>
    connect?: Enumerable<FavoriteWhereUniqueInput>
    update?: Enumerable<FavoriteUpdateWithWhereUniqueWithoutMangaInput>
    updateMany?: Enumerable<FavoriteUpdateManyWithWhereWithoutMangaInput>
    deleteMany?: Enumerable<FavoriteScalarWhereInput>
  }

  export type GenresUncheckedUpdateManyWithoutMangaInput = {
    create?: XOR<Enumerable<GenresCreateWithoutMangaInput>, Enumerable<GenresUncheckedCreateWithoutMangaInput>>
    connectOrCreate?: Enumerable<GenresCreateOrConnectWithoutMangaInput>
    upsert?: Enumerable<GenresUpsertWithWhereUniqueWithoutMangaInput>
    set?: Enumerable<GenresWhereUniqueInput>
    disconnect?: Enumerable<GenresWhereUniqueInput>
    delete?: Enumerable<GenresWhereUniqueInput>
    connect?: Enumerable<GenresWhereUniqueInput>
    update?: Enumerable<GenresUpdateWithWhereUniqueWithoutMangaInput>
    updateMany?: Enumerable<GenresUpdateManyWithWhereWithoutMangaInput>
    deleteMany?: Enumerable<GenresScalarWhereInput>
  }

  export type ImageCreateNestedManyWithoutChapterInput = {
    create?: XOR<Enumerable<ImageCreateWithoutChapterInput>, Enumerable<ImageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutChapterInput>
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type MangaCreateNestedOneWithoutChapterInput = {
    create?: XOR<MangaCreateWithoutChapterInput, MangaUncheckedCreateWithoutChapterInput>
    connectOrCreate?: MangaCreateOrConnectWithoutChapterInput
    connect?: MangaWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutChapterInput = {
    create?: XOR<Enumerable<ImageCreateWithoutChapterInput>, Enumerable<ImageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutChapterInput>
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type ImageUpdateManyWithoutChapterInput = {
    create?: XOR<Enumerable<ImageCreateWithoutChapterInput>, Enumerable<ImageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutChapterInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutChapterInput>
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutChapterInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutChapterInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type MangaUpdateOneRequiredWithoutChapterInput = {
    create?: XOR<MangaCreateWithoutChapterInput, MangaUncheckedCreateWithoutChapterInput>
    connectOrCreate?: MangaCreateOrConnectWithoutChapterInput
    upsert?: MangaUpsertWithoutChapterInput
    connect?: MangaWhereUniqueInput
    update?: XOR<MangaUpdateWithoutChapterInput, MangaUncheckedUpdateWithoutChapterInput>
  }

  export type ImageUncheckedUpdateManyWithoutChapterInput = {
    create?: XOR<Enumerable<ImageCreateWithoutChapterInput>, Enumerable<ImageUncheckedCreateWithoutChapterInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutChapterInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutChapterInput>
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutChapterInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutChapterInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type ChapterCreateNestedOneWithoutImagesInput = {
    create?: XOR<ChapterCreateWithoutImagesInput, ChapterUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutImagesInput
    connect?: ChapterWhereUniqueInput
  }

  export type MangaCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<MangaCreateWithoutImageInput>, Enumerable<MangaUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<MangaCreateOrConnectWithoutImageInput>
    connect?: Enumerable<MangaWhereUniqueInput>
  }

  export type MangaUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<MangaCreateWithoutImageInput>, Enumerable<MangaUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<MangaCreateOrConnectWithoutImageInput>
    connect?: Enumerable<MangaWhereUniqueInput>
  }

  export type ChapterUpdateOneRequiredWithoutImagesInput = {
    create?: XOR<ChapterCreateWithoutImagesInput, ChapterUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ChapterCreateOrConnectWithoutImagesInput
    upsert?: ChapterUpsertWithoutImagesInput
    connect?: ChapterWhereUniqueInput
    update?: XOR<ChapterUpdateWithoutImagesInput, ChapterUncheckedUpdateWithoutImagesInput>
  }

  export type MangaUpdateManyWithoutImageInput = {
    create?: XOR<Enumerable<MangaCreateWithoutImageInput>, Enumerable<MangaUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<MangaCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<MangaUpsertWithWhereUniqueWithoutImageInput>
    set?: Enumerable<MangaWhereUniqueInput>
    disconnect?: Enumerable<MangaWhereUniqueInput>
    delete?: Enumerable<MangaWhereUniqueInput>
    connect?: Enumerable<MangaWhereUniqueInput>
    update?: Enumerable<MangaUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<MangaUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<MangaScalarWhereInput>
  }

  export type MangaUncheckedUpdateManyWithoutImageInput = {
    create?: XOR<Enumerable<MangaCreateWithoutImageInput>, Enumerable<MangaUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<MangaCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<MangaUpsertWithWhereUniqueWithoutImageInput>
    set?: Enumerable<MangaWhereUniqueInput>
    disconnect?: Enumerable<MangaWhereUniqueInput>
    delete?: Enumerable<MangaWhereUniqueInput>
    connect?: Enumerable<MangaWhereUniqueInput>
    update?: Enumerable<MangaUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<MangaUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<MangaScalarWhereInput>
  }

  export type MangaCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<MangaCreateWithoutFavoriteInput, MangaUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: MangaCreateOrConnectWithoutFavoriteInput
    connect?: MangaWhereUniqueInput
  }

  export type MangaUpdateOneRequiredWithoutFavoriteInput = {
    create?: XOR<MangaCreateWithoutFavoriteInput, MangaUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: MangaCreateOrConnectWithoutFavoriteInput
    upsert?: MangaUpsertWithoutFavoriteInput
    connect?: MangaWhereUniqueInput
    update?: XOR<MangaUpdateWithoutFavoriteInput, MangaUncheckedUpdateWithoutFavoriteInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type MangaCreateWithoutGenresInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterCreateNestedManyWithoutMangaInput
    Favorite?: FavoriteCreateNestedManyWithoutMangaInput
    Image: ImageCreateNestedOneWithoutMangaInput
    ManganeloId: string
  }

  export type MangaUncheckedCreateWithoutGenresInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterUncheckedCreateNestedManyWithoutMangaInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMangaInput
    imageId: number
    ManganeloId: string
  }

  export type MangaCreateOrConnectWithoutGenresInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
  }

  export type MangaUpsertWithoutGenresInput = {
    update: XOR<MangaUpdateWithoutGenresInput, MangaUncheckedUpdateWithoutGenresInput>
    create: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
  }

  export type MangaUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUpdateManyWithoutMangaInput
    Favorite?: FavoriteUpdateManyWithoutMangaInput
    Image?: ImageUpdateOneRequiredWithoutMangaInput
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUncheckedUpdateManyWithoutMangaInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutMangaInput
    imageId?: IntFieldUpdateOperationsInput | number
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateWithoutMangaInput = {
    id: number
    title: string
    description: string
    createdAt: Date | string
    updatedAt: Date | string
    Images?: ImageCreateNestedManyWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutMangaInput = {
    id: number
    title: string
    description: string
    createdAt: Date | string
    updatedAt: Date | string
    Images?: ImageUncheckedCreateNestedManyWithoutChapterInput
  }

  export type ChapterCreateOrConnectWithoutMangaInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput>
  }

  export type FavoriteCreateWithoutMangaInput = {
    id: number
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FavoriteUncheckedCreateWithoutMangaInput = {
    id: number
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FavoriteCreateOrConnectWithoutMangaInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutMangaInput, FavoriteUncheckedCreateWithoutMangaInput>
  }

  export type GenresCreateWithoutMangaInput = {
    id: number
    name: string
  }

  export type GenresUncheckedCreateWithoutMangaInput = {
    id: number
    name: string
  }

  export type GenresCreateOrConnectWithoutMangaInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutMangaInput, GenresUncheckedCreateWithoutMangaInput>
  }

  export type ImageCreateWithoutMangaInput = {
    id: number
    url: string
    createdAt: Date | string
    updatedAt: Date | string
    chapter: ChapterCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutMangaInput = {
    id: number
    url: string
    createdAt: Date | string
    updatedAt: Date | string
    chapterId: number
  }

  export type ImageCreateOrConnectWithoutMangaInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMangaInput, ImageUncheckedCreateWithoutMangaInput>
  }

  export type ChapterUpsertWithWhereUniqueWithoutMangaInput = {
    where: ChapterWhereUniqueInput
    update: XOR<ChapterUpdateWithoutMangaInput, ChapterUncheckedUpdateWithoutMangaInput>
    create: XOR<ChapterCreateWithoutMangaInput, ChapterUncheckedCreateWithoutMangaInput>
  }

  export type ChapterUpdateWithWhereUniqueWithoutMangaInput = {
    where: ChapterWhereUniqueInput
    data: XOR<ChapterUpdateWithoutMangaInput, ChapterUncheckedUpdateWithoutMangaInput>
  }

  export type ChapterUpdateManyWithWhereWithoutMangaInput = {
    where: ChapterScalarWhereInput
    data: XOR<ChapterUpdateManyMutationInput, ChapterUncheckedUpdateManyWithoutChapterInput>
  }

  export type ChapterScalarWhereInput = {
    AND?: Enumerable<ChapterScalarWhereInput>
    OR?: Enumerable<ChapterScalarWhereInput>
    NOT?: Enumerable<ChapterScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    mangaId?: IntFilter | number
  }

  export type FavoriteUpsertWithWhereUniqueWithoutMangaInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutMangaInput, FavoriteUncheckedUpdateWithoutMangaInput>
    create: XOR<FavoriteCreateWithoutMangaInput, FavoriteUncheckedCreateWithoutMangaInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutMangaInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutMangaInput, FavoriteUncheckedUpdateWithoutMangaInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutMangaInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutFavoriteInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: Enumerable<FavoriteScalarWhereInput>
    OR?: Enumerable<FavoriteScalarWhereInput>
    NOT?: Enumerable<FavoriteScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    mangaId?: IntFilter | number
  }

  export type GenresUpsertWithWhereUniqueWithoutMangaInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutMangaInput, GenresUncheckedUpdateWithoutMangaInput>
    create: XOR<GenresCreateWithoutMangaInput, GenresUncheckedCreateWithoutMangaInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutMangaInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutMangaInput, GenresUncheckedUpdateWithoutMangaInput>
  }

  export type GenresUpdateManyWithWhereWithoutMangaInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutGenresInput>
  }

  export type GenresScalarWhereInput = {
    AND?: Enumerable<GenresScalarWhereInput>
    OR?: Enumerable<GenresScalarWhereInput>
    NOT?: Enumerable<GenresScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    mangaId?: IntNullableFilter | number | null
  }

  export type ImageUpsertWithoutMangaInput = {
    update: XOR<ImageUpdateWithoutMangaInput, ImageUncheckedUpdateWithoutMangaInput>
    create: XOR<ImageCreateWithoutMangaInput, ImageUncheckedCreateWithoutMangaInput>
  }

  export type ImageUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapter?: ChapterUpdateOneRequiredWithoutImagesInput
  }

  export type ImageUncheckedUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chapterId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateWithoutChapterInput = {
    id: number
    url: string
    createdAt: Date | string
    updatedAt: Date | string
    Manga?: MangaCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutChapterInput = {
    id: number
    url: string
    createdAt: Date | string
    updatedAt: Date | string
    Manga?: MangaUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutChapterInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutChapterInput, ImageUncheckedCreateWithoutChapterInput>
  }

  export type MangaCreateWithoutChapterInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteCreateNestedManyWithoutMangaInput
    Genres?: GenresCreateNestedManyWithoutMangaInput
    Image: ImageCreateNestedOneWithoutMangaInput
    ManganeloId: string
  }

  export type MangaUncheckedCreateWithoutChapterInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMangaInput
    Genres?: GenresUncheckedCreateNestedManyWithoutMangaInput
    imageId: number
    ManganeloId: string
  }

  export type MangaCreateOrConnectWithoutChapterInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutChapterInput, MangaUncheckedCreateWithoutChapterInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutChapterInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutChapterInput, ImageUncheckedUpdateWithoutChapterInput>
    create: XOR<ImageCreateWithoutChapterInput, ImageUncheckedCreateWithoutChapterInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutChapterInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutChapterInput, ImageUncheckedUpdateWithoutChapterInput>
  }

  export type ImageUpdateManyWithWhereWithoutChapterInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type ImageScalarWhereInput = {
    AND?: Enumerable<ImageScalarWhereInput>
    OR?: Enumerable<ImageScalarWhereInput>
    NOT?: Enumerable<ImageScalarWhereInput>
    id?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    chapterId?: IntFilter | number
  }

  export type MangaUpsertWithoutChapterInput = {
    update: XOR<MangaUpdateWithoutChapterInput, MangaUncheckedUpdateWithoutChapterInput>
    create: XOR<MangaCreateWithoutChapterInput, MangaUncheckedCreateWithoutChapterInput>
  }

  export type MangaUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUpdateManyWithoutMangaInput
    Genres?: GenresUpdateManyWithoutMangaInput
    Image?: ImageUpdateOneRequiredWithoutMangaInput
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutMangaInput
    Genres?: GenresUncheckedUpdateManyWithoutMangaInput
    imageId?: IntFieldUpdateOperationsInput | number
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterCreateWithoutImagesInput = {
    id: number
    title: string
    description: string
    createdAt: Date | string
    updatedAt: Date | string
    manga: MangaCreateNestedOneWithoutChapterInput
  }

  export type ChapterUncheckedCreateWithoutImagesInput = {
    id: number
    title: string
    description: string
    createdAt: Date | string
    updatedAt: Date | string
    mangaId: number
  }

  export type ChapterCreateOrConnectWithoutImagesInput = {
    where: ChapterWhereUniqueInput
    create: XOR<ChapterCreateWithoutImagesInput, ChapterUncheckedCreateWithoutImagesInput>
  }

  export type MangaCreateWithoutImageInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterCreateNestedManyWithoutMangaInput
    Favorite?: FavoriteCreateNestedManyWithoutMangaInput
    Genres?: GenresCreateNestedManyWithoutMangaInput
    ManganeloId: string
  }

  export type MangaUncheckedCreateWithoutImageInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterUncheckedCreateNestedManyWithoutMangaInput
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutMangaInput
    Genres?: GenresUncheckedCreateNestedManyWithoutMangaInput
    ManganeloId: string
  }

  export type MangaCreateOrConnectWithoutImageInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutImageInput, MangaUncheckedCreateWithoutImageInput>
  }

  export type ChapterUpsertWithoutImagesInput = {
    update: XOR<ChapterUpdateWithoutImagesInput, ChapterUncheckedUpdateWithoutImagesInput>
    create: XOR<ChapterCreateWithoutImagesInput, ChapterUncheckedCreateWithoutImagesInput>
  }

  export type ChapterUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manga?: MangaUpdateOneRequiredWithoutChapterInput
  }

  export type ChapterUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mangaId?: IntFieldUpdateOperationsInput | number
  }

  export type MangaUpsertWithWhereUniqueWithoutImageInput = {
    where: MangaWhereUniqueInput
    update: XOR<MangaUpdateWithoutImageInput, MangaUncheckedUpdateWithoutImageInput>
    create: XOR<MangaCreateWithoutImageInput, MangaUncheckedCreateWithoutImageInput>
  }

  export type MangaUpdateWithWhereUniqueWithoutImageInput = {
    where: MangaWhereUniqueInput
    data: XOR<MangaUpdateWithoutImageInput, MangaUncheckedUpdateWithoutImageInput>
  }

  export type MangaUpdateManyWithWhereWithoutImageInput = {
    where: MangaScalarWhereInput
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyWithoutMangaInput>
  }

  export type MangaScalarWhereInput = {
    AND?: Enumerable<MangaScalarWhereInput>
    OR?: Enumerable<MangaScalarWhereInput>
    NOT?: Enumerable<MangaScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringFilter | string
    chapters?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    imageId?: IntFilter | number
    ManganeloId?: StringFilter | string
  }

  export type MangaCreateWithoutFavoriteInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterCreateNestedManyWithoutMangaInput
    Genres?: GenresCreateNestedManyWithoutMangaInput
    Image: ImageCreateNestedOneWithoutMangaInput
    ManganeloId: string
  }

  export type MangaUncheckedCreateWithoutFavoriteInput = {
    id: number
    title: string
    description: string
    chapters: number
    createdAt: Date | string
    updatedAt: Date | string
    Chapter?: ChapterUncheckedCreateNestedManyWithoutMangaInput
    Genres?: GenresUncheckedCreateNestedManyWithoutMangaInput
    imageId: number
    ManganeloId: string
  }

  export type MangaCreateOrConnectWithoutFavoriteInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutFavoriteInput, MangaUncheckedCreateWithoutFavoriteInput>
  }

  export type MangaUpsertWithoutFavoriteInput = {
    update: XOR<MangaUpdateWithoutFavoriteInput, MangaUncheckedUpdateWithoutFavoriteInput>
    create: XOR<MangaCreateWithoutFavoriteInput, MangaUncheckedCreateWithoutFavoriteInput>
  }

  export type MangaUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUpdateManyWithoutMangaInput
    Genres?: GenresUpdateManyWithoutMangaInput
    Image?: ImageUpdateOneRequiredWithoutMangaInput
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUncheckedUpdateManyWithoutMangaInput
    Genres?: GenresUncheckedUpdateManyWithoutMangaInput
    imageId?: IntFieldUpdateOperationsInput | number
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type ChapterUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImageUpdateManyWithoutChapterInput
  }

  export type ChapterUncheckedUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Images?: ImageUncheckedUpdateManyWithoutChapterInput
  }

  export type ChapterUncheckedUpdateManyWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenresUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Manga?: MangaUpdateManyWithoutImageInput
  }

  export type ImageUncheckedUpdateWithoutChapterInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Manga?: MangaUncheckedUpdateManyWithoutImageInput
  }

  export type ImageUncheckedUpdateManyWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MangaUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUpdateManyWithoutMangaInput
    Favorite?: FavoriteUpdateManyWithoutMangaInput
    Genres?: GenresUpdateManyWithoutMangaInput
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chapter?: ChapterUncheckedUpdateManyWithoutMangaInput
    Favorite?: FavoriteUncheckedUpdateManyWithoutMangaInput
    Genres?: GenresUncheckedUpdateManyWithoutMangaInput
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateManyWithoutMangaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    chapters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ManganeloId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}