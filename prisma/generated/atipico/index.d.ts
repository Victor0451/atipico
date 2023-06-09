
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model categorias
 * 
 */
export type categorias = {
  idcategoria: number
  categoria: string | null
  fecha: Date | null
  estado: boolean | null
}

/**
 * Model menu
 * 
 */
export type menu = {
  idmenu: number
  idcategoria: number | null
  nombre: string | null
  descripcion: string | null
  precio: number | null
  fecha: Date | null
  estado: boolean | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<GlobalReject>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
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
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categorias: 'categorias',
    menu: 'menu'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
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
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
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
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
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
     * Overwrites the datasource url from your schema.prisma file
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
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
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

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model categorias
   */


  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    idcategoria: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    idcategoria: number | null
  }

  export type CategoriasMinAggregateOutputType = {
    idcategoria: number | null
    categoria: string | null
    fecha: Date | null
    estado: boolean | null
  }

  export type CategoriasMaxAggregateOutputType = {
    idcategoria: number | null
    categoria: string | null
    fecha: Date | null
    estado: boolean | null
  }

  export type CategoriasCountAggregateOutputType = {
    idcategoria: number
    categoria: number
    fecha: number
    estado: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    idcategoria?: true
  }

  export type CategoriasSumAggregateInputType = {
    idcategoria?: true
  }

  export type CategoriasMinAggregateInputType = {
    idcategoria?: true
    categoria?: true
    fecha?: true
    estado?: true
  }

  export type CategoriasMaxAggregateInputType = {
    idcategoria?: true
    categoria?: true
    fecha?: true
    estado?: true
  }

  export type CategoriasCountAggregateInputType = {
    idcategoria?: true
    categoria?: true
    fecha?: true
    estado?: true
    _all?: true
  }

  export type CategoriasAggregateArgs = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type CategoriasGroupByArgs = {
    where?: categoriasWhereInput
    orderBy?: Enumerable<categoriasOrderByWithAggregationInput>
    by: CategoriasScalarFieldEnum[]
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }


  export type CategoriasGroupByOutputType = {
    idcategoria: number
    categoria: string | null
    fecha: Date | null
    estado: boolean | null
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends CategoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect = {
    idcategoria?: boolean
    categoria?: boolean
    fecha?: boolean
    estado?: boolean
  }


  export type categoriasGetPayload<S extends boolean | null | undefined | categoriasArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? categorias :
    S extends undefined ? never :
    S extends { include: any } & (categoriasArgs | categoriasFindManyArgs)
    ? categorias 
    : S extends { select: any } & (categoriasArgs | categoriasFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof categorias ? categorias[P] : never
  } 
      : categorias


  type categoriasCountArgs = 
    Omit<categoriasFindManyArgs, 'select' | 'include'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categoriasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, categoriasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'categorias'> extends True ? Prisma__categoriasClient<categoriasGetPayload<T>> : Prisma__categoriasClient<categoriasGetPayload<T> | null, null>

    /**
     * Find one Categorias that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, categoriasFindUniqueOrThrowArgs>
    ): Prisma__categoriasClient<categoriasGetPayload<T>>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categoriasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, categoriasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'categorias'> extends True ? Prisma__categoriasClient<categoriasGetPayload<T>> : Prisma__categoriasClient<categoriasGetPayload<T> | null, null>

    /**
     * Find the first Categorias that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, categoriasFindFirstOrThrowArgs>
    ): Prisma__categoriasClient<categoriasGetPayload<T>>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `idcategoria`
     * const categoriasWithIdcategoriaOnly = await prisma.categorias.findMany({ select: { idcategoria: true } })
     * 
    **/
    findMany<T extends categoriasFindManyArgs>(
      args?: SelectSubset<T, categoriasFindManyArgs>
    ): Prisma.PrismaPromise<Array<categoriasGetPayload<T>>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
    **/
    create<T extends categoriasCreateArgs>(
      args: SelectSubset<T, categoriasCreateArgs>
    ): Prisma__categoriasClient<categoriasGetPayload<T>>

    /**
     * Create many Categorias.
     *     @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     *     @example
     *     // Create many Categorias
     *     const categorias = await prisma.categorias.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends categoriasCreateManyArgs>(
      args?: SelectSubset<T, categoriasCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
    **/
    delete<T extends categoriasDeleteArgs>(
      args: SelectSubset<T, categoriasDeleteArgs>
    ): Prisma__categoriasClient<categoriasGetPayload<T>>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categoriasUpdateArgs>(
      args: SelectSubset<T, categoriasUpdateArgs>
    ): Prisma__categoriasClient<categoriasGetPayload<T>>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categoriasDeleteManyArgs>(
      args?: SelectSubset<T, categoriasDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categoriasUpdateManyArgs>(
      args: SelectSubset<T, categoriasUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
    **/
    upsert<T extends categoriasUpsertArgs>(
      args: SelectSubset<T, categoriasUpsertArgs>
    ): Prisma__categoriasClient<categoriasGetPayload<T>>

    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasGroupByArgs} args - Group by arguments.
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
      T extends CategoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriasGroupByArgs['orderBy'] }
        : { orderBy?: CategoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__categoriasClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * categorias base type for findUnique actions
   */
  export type categoriasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUnique
   */
  export interface categoriasFindUniqueArgs extends categoriasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }


  /**
   * categorias base type for findFirst actions
   */
  export type categoriasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: Enumerable<CategoriasScalarFieldEnum>
  }

  /**
   * categorias findFirst
   */
  export interface categoriasFindFirstArgs extends categoriasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: Enumerable<CategoriasScalarFieldEnum>
  }


  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: Enumerable<categoriasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: Enumerable<CategoriasScalarFieldEnum>
  }


  /**
   * categorias create
   */
  export type categoriasCreateArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }


  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs = {
    /**
     * The data used to create many categorias.
     */
    data: Enumerable<categoriasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * categorias update
   */
  export type categoriasUpdateArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }


  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
  }


  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }


  /**
   * categorias delete
   */
  export type categoriasDeleteArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }


  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
  }


  /**
   * categorias without action
   */
  export type categoriasArgs = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect | null
  }



  /**
   * Model menu
   */


  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    idmenu: number | null
    idcategoria: number | null
    precio: number | null
  }

  export type MenuSumAggregateOutputType = {
    idmenu: number | null
    idcategoria: number | null
    precio: number | null
  }

  export type MenuMinAggregateOutputType = {
    idmenu: number | null
    idcategoria: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    fecha: Date | null
    estado: boolean | null
  }

  export type MenuMaxAggregateOutputType = {
    idmenu: number | null
    idcategoria: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    fecha: Date | null
    estado: boolean | null
  }

  export type MenuCountAggregateOutputType = {
    idmenu: number
    idcategoria: number
    nombre: number
    descripcion: number
    precio: number
    fecha: number
    estado: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    idmenu?: true
    idcategoria?: true
    precio?: true
  }

  export type MenuSumAggregateInputType = {
    idmenu?: true
    idcategoria?: true
    precio?: true
  }

  export type MenuMinAggregateInputType = {
    idmenu?: true
    idcategoria?: true
    nombre?: true
    descripcion?: true
    precio?: true
    fecha?: true
    estado?: true
  }

  export type MenuMaxAggregateInputType = {
    idmenu?: true
    idcategoria?: true
    nombre?: true
    descripcion?: true
    precio?: true
    fecha?: true
    estado?: true
  }

  export type MenuCountAggregateInputType = {
    idmenu?: true
    idcategoria?: true
    nombre?: true
    descripcion?: true
    precio?: true
    fecha?: true
    estado?: true
    _all?: true
  }

  export type MenuAggregateArgs = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs = {
    where?: menuWhereInput
    orderBy?: Enumerable<menuOrderByWithAggregationInput>
    by: MenuScalarFieldEnum[]
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }


  export type MenuGroupByOutputType = {
    idmenu: number
    idcategoria: number | null
    nombre: string | null
    descripcion: string | null
    precio: number | null
    fecha: Date | null
    estado: boolean | null
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect = {
    idmenu?: boolean
    idcategoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    fecha?: boolean
    estado?: boolean
  }


  export type menuGetPayload<S extends boolean | null | undefined | menuArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? menu :
    S extends undefined ? never :
    S extends { include: any } & (menuArgs | menuFindManyArgs)
    ? menu 
    : S extends { select: any } & (menuArgs | menuFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof menu ? menu[P] : never
  } 
      : menu


  type menuCountArgs = 
    Omit<menuFindManyArgs, 'select' | 'include'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends menuFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, menuFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'menu'> extends True ? Prisma__menuClient<menuGetPayload<T>> : Prisma__menuClient<menuGetPayload<T> | null, null>

    /**
     * Find one Menu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, menuFindUniqueOrThrowArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends menuFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, menuFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'menu'> extends True ? Prisma__menuClient<menuGetPayload<T>> : Prisma__menuClient<menuGetPayload<T> | null, null>

    /**
     * Find the first Menu that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, menuFindFirstOrThrowArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `idmenu`
     * const menuWithIdmenuOnly = await prisma.menu.findMany({ select: { idmenu: true } })
     * 
    **/
    findMany<T extends menuFindManyArgs>(
      args?: SelectSubset<T, menuFindManyArgs>
    ): Prisma.PrismaPromise<Array<menuGetPayload<T>>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends menuCreateArgs>(
      args: SelectSubset<T, menuCreateArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Create many Menus.
     *     @param {menuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends menuCreateManyArgs>(
      args?: SelectSubset<T, menuCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends menuDeleteArgs>(
      args: SelectSubset<T, menuDeleteArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends menuUpdateArgs>(
      args: SelectSubset<T, menuUpdateArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends menuDeleteManyArgs>(
      args?: SelectSubset<T, menuDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends menuUpdateManyArgs>(
      args: SelectSubset<T, menuUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends menuUpsertArgs>(
      args: SelectSubset<T, menuUpsertArgs>
    ): Prisma__menuClient<menuGetPayload<T>>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__menuClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * menu base type for findUnique actions
   */
  export type menuFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUnique
   */
  export interface menuFindUniqueArgs extends menuFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }


  /**
   * menu base type for findFirst actions
   */
  export type menuFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }

  /**
   * menu findFirst
   */
  export interface menuFindFirstArgs extends menuFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * menu findMany
   */
  export type menuFindManyArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menuOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: Enumerable<MenuScalarFieldEnum>
  }


  /**
   * menu create
   */
  export type menuCreateArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }


  /**
   * menu createMany
   */
  export type menuCreateManyArgs = {
    /**
     * The data used to create many menus.
     */
    data: Enumerable<menuCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * menu update
   */
  export type menuUpdateArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }


  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
  }


  /**
   * menu upsert
   */
  export type menuUpsertArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }


  /**
   * menu delete
   */
  export type menuDeleteArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }


  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
  }


  /**
   * menu without action
   */
  export type menuArgs = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect | null
  }



  /**
   * Enums
   */

  export const CategoriasScalarFieldEnum: {
    idcategoria: 'idcategoria',
    categoria: 'categoria',
    fecha: 'fecha',
    estado: 'estado'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    idmenu: 'idmenu',
    idcategoria: 'idcategoria',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    fecha: 'fecha',
    estado: 'estado'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type categoriasWhereInput = {
    AND?: Enumerable<categoriasWhereInput>
    OR?: Enumerable<categoriasWhereInput>
    NOT?: Enumerable<categoriasWhereInput>
    idcategoria?: IntFilter | number
    categoria?: StringNullableFilter | string | null
    fecha?: DateTimeNullableFilter | Date | string | null
    estado?: BoolNullableFilter | boolean | null
  }

  export type categoriasOrderByWithRelationInput = {
    idcategoria?: SortOrder
    categoria?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type categoriasWhereUniqueInput = {
    idcategoria?: number
  }

  export type categoriasOrderByWithAggregationInput = {
    idcategoria?: SortOrder
    categoria?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<categoriasScalarWhereWithAggregatesInput>
    OR?: Enumerable<categoriasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<categoriasScalarWhereWithAggregatesInput>
    idcategoria?: IntWithAggregatesFilter | number
    categoria?: StringNullableWithAggregatesFilter | string | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type menuWhereInput = {
    AND?: Enumerable<menuWhereInput>
    OR?: Enumerable<menuWhereInput>
    NOT?: Enumerable<menuWhereInput>
    idmenu?: IntFilter | number
    idcategoria?: IntNullableFilter | number | null
    nombre?: StringNullableFilter | string | null
    descripcion?: StringNullableFilter | string | null
    precio?: FloatNullableFilter | number | null
    fecha?: DateTimeNullableFilter | Date | string | null
    estado?: BoolNullableFilter | boolean | null
  }

  export type menuOrderByWithRelationInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type menuWhereUniqueInput = {
    idmenu?: number
  }

  export type menuOrderByWithAggregationInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: Enumerable<menuScalarWhereWithAggregatesInput>
    OR?: Enumerable<menuScalarWhereWithAggregatesInput>
    NOT?: Enumerable<menuScalarWhereWithAggregatesInput>
    idmenu?: IntWithAggregatesFilter | number
    idcategoria?: IntNullableWithAggregatesFilter | number | null
    nombre?: StringNullableWithAggregatesFilter | string | null
    descripcion?: StringNullableWithAggregatesFilter | string | null
    precio?: FloatNullableWithAggregatesFilter | number | null
    fecha?: DateTimeNullableWithAggregatesFilter | Date | string | null
    estado?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type categoriasCreateInput = {
    categoria?: string | null
    fecha?: Date | string | null
    estado?: boolean | null
  }

  export type categoriasUncheckedCreateInput = {
    idcategoria?: number
    categoria?: string | null
    fecha?: Date | string | null
    estado?: boolean | null
  }

  export type categoriasUpdateInput = {
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type categoriasUncheckedUpdateInput = {
    idcategoria?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type categoriasCreateManyInput = {
    idcategoria?: number
    categoria?: string | null
    fecha?: Date | string | null
    estado?: boolean | null
  }

  export type categoriasUpdateManyMutationInput = {
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type categoriasUncheckedUpdateManyInput = {
    idcategoria?: IntFieldUpdateOperationsInput | number
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuCreateInput = {
    idcategoria?: number | null
    nombre?: string | null
    descripcion?: string | null
    precio?: number | null
    fecha?: Date | string | null
    estado?: boolean | null
  }

  export type menuUncheckedCreateInput = {
    idmenu?: number
    idcategoria?: number | null
    nombre?: string | null
    descripcion?: string | null
    precio?: number | null
    fecha?: Date | string | null
    estado?: boolean | null
  }

  export type menuUpdateInput = {
    idcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuUncheckedUpdateInput = {
    idmenu?: IntFieldUpdateOperationsInput | number
    idcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuCreateManyInput = {
    idmenu?: number
    idcategoria?: number | null
    nombre?: string | null
    descripcion?: string | null
    precio?: number | null
    fecha?: Date | string | null
    estado?: boolean | null
  }

  export type menuUpdateManyMutationInput = {
    idcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menuUncheckedUpdateManyInput = {
    idmenu?: IntFieldUpdateOperationsInput | number
    idcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableFloatFieldUpdateOperationsInput | number | null
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type categoriasCountOrderByAggregateInput = {
    idcategoria?: SortOrder
    categoria?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    idcategoria?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    idcategoria?: SortOrder
    categoria?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    idcategoria?: SortOrder
    categoria?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    idcategoria?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type menuCountOrderByAggregateInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    precio?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    idmenu?: SortOrder
    idcategoria?: SortOrder
    precio?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
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

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
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
  export const dmmf: runtime.BaseDMMF
}