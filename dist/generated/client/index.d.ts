
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer_type
 * 
 */
export type Customer_type = $Result.DefaultSelection<Prisma.$Customer_typePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Product_type
 * 
 */
export type Product_type = $Result.DefaultSelection<Prisma.$Product_typePayload>
/**
 * Model Sales_transaction
 * 
 */
export type Sales_transaction = $Result.DefaultSelection<Prisma.$Sales_transactionPayload>
/**
 * Model Item_transaction
 * 
 */
export type Item_transaction = $Result.DefaultSelection<Prisma.$Item_transactionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customer_type`: Exposes CRUD operations for the **Customer_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_types
    * const customer_types = await prisma.customer_type.findMany()
    * ```
    */
  get customer_type(): Prisma.Customer_typeDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.product_type`: Exposes CRUD operations for the **Product_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_types
    * const product_types = await prisma.product_type.findMany()
    * ```
    */
  get product_type(): Prisma.Product_typeDelegate<ExtArgs>;

  /**
   * `prisma.sales_transaction`: Exposes CRUD operations for the **Sales_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales_transactions
    * const sales_transactions = await prisma.sales_transaction.findMany()
    * ```
    */
  get sales_transaction(): Prisma.Sales_transactionDelegate<ExtArgs>;

  /**
   * `prisma.item_transaction`: Exposes CRUD operations for the **Item_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Item_transactions
    * const item_transactions = await prisma.item_transaction.findMany()
    * ```
    */
  get item_transaction(): Prisma.Item_transactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer_type: 'Customer_type',
    Product: 'Product',
    Product_type: 'Product_type',
    Sales_transaction: 'Sales_transaction',
    Item_transaction: 'Item_transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'customer_type' | 'product' | 'product_type' | 'sales_transaction' | 'item_transaction'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer_type: {
        payload: Prisma.$Customer_typePayload<ExtArgs>
        fields: Prisma.Customer_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Customer_typeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Customer_typeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>
          }
          findFirst: {
            args: Prisma.Customer_typeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Customer_typeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>
          }
          findMany: {
            args: Prisma.Customer_typeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>[]
          }
          create: {
            args: Prisma.Customer_typeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>
          }
          createMany: {
            args: Prisma.Customer_typeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Customer_typeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>
          }
          update: {
            args: Prisma.Customer_typeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>
          }
          deleteMany: {
            args: Prisma.Customer_typeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Customer_typeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Customer_typeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Customer_typePayload>
          }
          aggregate: {
            args: Prisma.Customer_typeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer_type>
          }
          groupBy: {
            args: Prisma.Customer_typeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Customer_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Customer_typeCountArgs<ExtArgs>,
            result: $Utils.Optional<Customer_typeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Product_type: {
        payload: Prisma.$Product_typePayload<ExtArgs>
        fields: Prisma.Product_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Product_typeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Product_typeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>
          }
          findFirst: {
            args: Prisma.Product_typeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Product_typeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>
          }
          findMany: {
            args: Prisma.Product_typeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>[]
          }
          create: {
            args: Prisma.Product_typeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>
          }
          createMany: {
            args: Prisma.Product_typeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Product_typeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>
          }
          update: {
            args: Prisma.Product_typeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>
          }
          deleteMany: {
            args: Prisma.Product_typeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Product_typeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Product_typeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Product_typePayload>
          }
          aggregate: {
            args: Prisma.Product_typeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct_type>
          }
          groupBy: {
            args: Prisma.Product_typeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Product_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Product_typeCountArgs<ExtArgs>,
            result: $Utils.Optional<Product_typeCountAggregateOutputType> | number
          }
        }
      }
      Sales_transaction: {
        payload: Prisma.$Sales_transactionPayload<ExtArgs>
        fields: Prisma.Sales_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sales_transactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sales_transactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>
          }
          findFirst: {
            args: Prisma.Sales_transactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sales_transactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>
          }
          findMany: {
            args: Prisma.Sales_transactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>[]
          }
          create: {
            args: Prisma.Sales_transactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>
          }
          createMany: {
            args: Prisma.Sales_transactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Sales_transactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>
          }
          update: {
            args: Prisma.Sales_transactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>
          }
          deleteMany: {
            args: Prisma.Sales_transactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Sales_transactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Sales_transactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sales_transactionPayload>
          }
          aggregate: {
            args: Prisma.Sales_transactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSales_transaction>
          }
          groupBy: {
            args: Prisma.Sales_transactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Sales_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sales_transactionCountArgs<ExtArgs>,
            result: $Utils.Optional<Sales_transactionCountAggregateOutputType> | number
          }
        }
      }
      Item_transaction: {
        payload: Prisma.$Item_transactionPayload<ExtArgs>
        fields: Prisma.Item_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Item_transactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Item_transactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>
          }
          findFirst: {
            args: Prisma.Item_transactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Item_transactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>
          }
          findMany: {
            args: Prisma.Item_transactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>[]
          }
          create: {
            args: Prisma.Item_transactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>
          }
          createMany: {
            args: Prisma.Item_transactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Item_transactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>
          }
          update: {
            args: Prisma.Item_transactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>
          }
          deleteMany: {
            args: Prisma.Item_transactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Item_transactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Item_transactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Item_transactionPayload>
          }
          aggregate: {
            args: Prisma.Item_transactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem_transaction>
          }
          groupBy: {
            args: Prisma.Item_transactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Item_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.Item_transactionCountArgs<ExtArgs>,
            result: $Utils.Optional<Item_transactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sales_transaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sales_transaction?: boolean | UserCountOutputTypeCountSales_transactionArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSales_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Sales_transactionWhereInput
  }



  /**
   * Count Type Customer_typeCountOutputType
   */

  export type Customer_typeCountOutputType = {
    sales_transaction: number
  }

  export type Customer_typeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sales_transaction?: boolean | Customer_typeCountOutputTypeCountSales_transactionArgs
  }

  // Custom InputTypes

  /**
   * Customer_typeCountOutputType without action
   */
  export type Customer_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_typeCountOutputType
     */
    select?: Customer_typeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Customer_typeCountOutputType without action
   */
  export type Customer_typeCountOutputTypeCountSales_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Sales_transactionWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    item_transaction: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    item_transaction?: boolean | ProductCountOutputTypeCountItem_transactionArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountItem_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Item_transactionWhereInput
  }



  /**
   * Count Type Product_typeCountOutputType
   */

  export type Product_typeCountOutputType = {
    product: number
  }

  export type Product_typeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | Product_typeCountOutputTypeCountProductArgs
  }

  // Custom InputTypes

  /**
   * Product_typeCountOutputType without action
   */
  export type Product_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_typeCountOutputType
     */
    select?: Product_typeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Product_typeCountOutputType without action
   */
  export type Product_typeCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type Sales_transactionCountOutputType
   */

  export type Sales_transactionCountOutputType = {
    item_transaction: number
  }

  export type Sales_transactionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    item_transaction?: boolean | Sales_transactionCountOutputTypeCountItem_transactionArgs
  }

  // Custom InputTypes

  /**
   * Sales_transactionCountOutputType without action
   */
  export type Sales_transactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transactionCountOutputType
     */
    select?: Sales_transactionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Sales_transactionCountOutputType without action
   */
  export type Sales_transactionCountOutputTypeCountItem_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Item_transactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    user_code: string | null
    name: string | null
    password: string | null
    refresh_token: string | null
    role: string | null
    last_login: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    user_code: string | null
    name: string | null
    password: string | null
    refresh_token: string | null
    role: string | null
    last_login: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    user_code: number
    name: number
    password: number
    refresh_token: number
    role: number
    last_login: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    user_code?: true
    name?: true
    password?: true
    refresh_token?: true
    role?: true
    last_login?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    user_code?: true
    name?: true
    password?: true
    refresh_token?: true
    role?: true
    last_login?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    user_code?: true
    name?: true
    password?: true
    refresh_token?: true
    role?: true
    last_login?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    user_code: string
    name: string
    password: string
    refresh_token: string | null
    role: string
    last_login: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_code?: boolean
    name?: boolean
    password?: boolean
    refresh_token?: boolean
    role?: boolean
    last_login?: boolean
    sales_transaction?: boolean | User$sales_transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user_code?: boolean
    name?: boolean
    password?: boolean
    refresh_token?: boolean
    role?: boolean
    last_login?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sales_transaction?: boolean | User$sales_transactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sales_transaction: Prisma.$Sales_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      user_code: string
      name: string
      password: string
      refresh_token: string | null
      role: string
      last_login: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sales_transaction<T extends User$sales_transactionArgs<ExtArgs> = {}>(args?: Subset<T, User$sales_transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly user_code: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly last_login: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sales_transaction
   */
  export type User$sales_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    where?: Sales_transactionWhereInput
    orderBy?: Sales_transactionOrderByWithRelationInput | Sales_transactionOrderByWithRelationInput[]
    cursor?: Sales_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_transactionScalarFieldEnum | Sales_transactionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Customer_type
   */

  export type AggregateCustomer_type = {
    _count: Customer_typeCountAggregateOutputType | null
    _avg: Customer_typeAvgAggregateOutputType | null
    _sum: Customer_typeSumAggregateOutputType | null
    _min: Customer_typeMinAggregateOutputType | null
    _max: Customer_typeMaxAggregateOutputType | null
  }

  export type Customer_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type Customer_typeSumAggregateOutputType = {
    id: number | null
  }

  export type Customer_typeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    customer_type_code: string | null
    customer_type_name: string | null
  }

  export type Customer_typeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    customer_type_code: string | null
    customer_type_name: string | null
  }

  export type Customer_typeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    customer_type_code: number
    customer_type_name: number
    _all: number
  }


  export type Customer_typeAvgAggregateInputType = {
    id?: true
  }

  export type Customer_typeSumAggregateInputType = {
    id?: true
  }

  export type Customer_typeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customer_type_code?: true
    customer_type_name?: true
  }

  export type Customer_typeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customer_type_code?: true
    customer_type_name?: true
  }

  export type Customer_typeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    customer_type_code?: true
    customer_type_name?: true
    _all?: true
  }

  export type Customer_typeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer_type to aggregate.
     */
    where?: Customer_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Customer_typeOrderByWithRelationInput | Customer_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Customer_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customer_types
    **/
    _count?: true | Customer_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customer_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customer_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_typeMaxAggregateInputType
  }

  export type GetCustomer_typeAggregateType<T extends Customer_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_type[P]>
      : GetScalarType<T[P], AggregateCustomer_type[P]>
  }




  export type Customer_typeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Customer_typeWhereInput
    orderBy?: Customer_typeOrderByWithAggregationInput | Customer_typeOrderByWithAggregationInput[]
    by: Customer_typeScalarFieldEnum[] | Customer_typeScalarFieldEnum
    having?: Customer_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_typeCountAggregateInputType | true
    _avg?: Customer_typeAvgAggregateInputType
    _sum?: Customer_typeSumAggregateInputType
    _min?: Customer_typeMinAggregateInputType
    _max?: Customer_typeMaxAggregateInputType
  }

  export type Customer_typeGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    customer_type_code: string
    customer_type_name: string
    _count: Customer_typeCountAggregateOutputType | null
    _avg: Customer_typeAvgAggregateOutputType | null
    _sum: Customer_typeSumAggregateOutputType | null
    _min: Customer_typeMinAggregateOutputType | null
    _max: Customer_typeMaxAggregateOutputType | null
  }

  type GetCustomer_typeGroupByPayload<T extends Customer_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_typeGroupByOutputType[P]>
        }
      >
    >


  export type Customer_typeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer_type_code?: boolean
    customer_type_name?: boolean
    sales_transaction?: boolean | Customer_type$sales_transactionArgs<ExtArgs>
    _count?: boolean | Customer_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_type"]>

  export type Customer_typeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer_type_code?: boolean
    customer_type_name?: boolean
  }

  export type Customer_typeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    sales_transaction?: boolean | Customer_type$sales_transactionArgs<ExtArgs>
    _count?: boolean | Customer_typeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Customer_typePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Customer_type"
    objects: {
      sales_transaction: Prisma.$Sales_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      customer_type_code: string
      customer_type_name: string
    }, ExtArgs["result"]["customer_type"]>
    composites: {}
  }


  type Customer_typeGetPayload<S extends boolean | null | undefined | Customer_typeDefaultArgs> = $Result.GetResult<Prisma.$Customer_typePayload, S>

  type Customer_typeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Customer_typeFindManyArgs, 'select' | 'include'> & {
      select?: Customer_typeCountAggregateInputType | true
    }

  export interface Customer_typeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer_type'], meta: { name: 'Customer_type' } }
    /**
     * Find zero or one Customer_type that matches the filter.
     * @param {Customer_typeFindUniqueArgs} args - Arguments to find a Customer_type
     * @example
     * // Get one Customer_type
     * const customer_type = await prisma.customer_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Customer_typeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Customer_typeFindUniqueArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer_type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Customer_typeFindUniqueOrThrowArgs} args - Arguments to find a Customer_type
     * @example
     * // Get one Customer_type
     * const customer_type = await prisma.customer_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Customer_typeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Customer_typeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeFindFirstArgs} args - Arguments to find a Customer_type
     * @example
     * // Get one Customer_type
     * const customer_type = await prisma.customer_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Customer_typeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Customer_typeFindFirstArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeFindFirstOrThrowArgs} args - Arguments to find a Customer_type
     * @example
     * // Get one Customer_type
     * const customer_type = await prisma.customer_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Customer_typeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Customer_typeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customer_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_types
     * const customer_types = await prisma.customer_type.findMany()
     * 
     * // Get first 10 Customer_types
     * const customer_types = await prisma.customer_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customer_typeWithIdOnly = await prisma.customer_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Customer_typeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Customer_typeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer_type.
     * @param {Customer_typeCreateArgs} args - Arguments to create a Customer_type.
     * @example
     * // Create one Customer_type
     * const Customer_type = await prisma.customer_type.create({
     *   data: {
     *     // ... data to create a Customer_type
     *   }
     * })
     * 
    **/
    create<T extends Customer_typeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Customer_typeCreateArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customer_types.
     *     @param {Customer_typeCreateManyArgs} args - Arguments to create many Customer_types.
     *     @example
     *     // Create many Customer_types
     *     const customer_type = await prisma.customer_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Customer_typeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Customer_typeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer_type.
     * @param {Customer_typeDeleteArgs} args - Arguments to delete one Customer_type.
     * @example
     * // Delete one Customer_type
     * const Customer_type = await prisma.customer_type.delete({
     *   where: {
     *     // ... filter to delete one Customer_type
     *   }
     * })
     * 
    **/
    delete<T extends Customer_typeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Customer_typeDeleteArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer_type.
     * @param {Customer_typeUpdateArgs} args - Arguments to update one Customer_type.
     * @example
     * // Update one Customer_type
     * const customer_type = await prisma.customer_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Customer_typeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Customer_typeUpdateArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customer_types.
     * @param {Customer_typeDeleteManyArgs} args - Arguments to filter Customer_types to delete.
     * @example
     * // Delete a few Customer_types
     * const { count } = await prisma.customer_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Customer_typeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Customer_typeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_types
     * const customer_type = await prisma.customer_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Customer_typeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Customer_typeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer_type.
     * @param {Customer_typeUpsertArgs} args - Arguments to update or create a Customer_type.
     * @example
     * // Update or create a Customer_type
     * const customer_type = await prisma.customer_type.upsert({
     *   create: {
     *     // ... data to create a Customer_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_type we want to update
     *   }
     * })
    **/
    upsert<T extends Customer_typeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Customer_typeUpsertArgs<ExtArgs>>
    ): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customer_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeCountArgs} args - Arguments to filter Customer_types to count.
     * @example
     * // Count the number of Customer_types
     * const count = await prisma.customer_type.count({
     *   where: {
     *     // ... the filter for the Customer_types we want to count
     *   }
     * })
    **/
    count<T extends Customer_typeCountArgs>(
      args?: Subset<T, Customer_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Customer_typeAggregateArgs>(args: Subset<T, Customer_typeAggregateArgs>): Prisma.PrismaPromise<GetCustomer_typeAggregateType<T>>

    /**
     * Group by Customer_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_typeGroupByArgs} args - Group by arguments.
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
      T extends Customer_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Customer_typeGroupByArgs['orderBy'] }
        : { orderBy?: Customer_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Customer_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer_type model
   */
  readonly fields: Customer_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Customer_typeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sales_transaction<T extends Customer_type$sales_transactionArgs<ExtArgs> = {}>(args?: Subset<T, Customer_type$sales_transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer_type model
   */ 
  interface Customer_typeFieldRefs {
    readonly id: FieldRef<"Customer_type", 'Int'>
    readonly createdAt: FieldRef<"Customer_type", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer_type", 'DateTime'>
    readonly customer_type_code: FieldRef<"Customer_type", 'String'>
    readonly customer_type_name: FieldRef<"Customer_type", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Customer_type findUnique
   */
  export type Customer_typeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * Filter, which Customer_type to fetch.
     */
    where: Customer_typeWhereUniqueInput
  }


  /**
   * Customer_type findUniqueOrThrow
   */
  export type Customer_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * Filter, which Customer_type to fetch.
     */
    where: Customer_typeWhereUniqueInput
  }


  /**
   * Customer_type findFirst
   */
  export type Customer_typeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * Filter, which Customer_type to fetch.
     */
    where?: Customer_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Customer_typeOrderByWithRelationInput | Customer_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_types.
     */
    cursor?: Customer_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_types.
     */
    distinct?: Customer_typeScalarFieldEnum | Customer_typeScalarFieldEnum[]
  }


  /**
   * Customer_type findFirstOrThrow
   */
  export type Customer_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * Filter, which Customer_type to fetch.
     */
    where?: Customer_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Customer_typeOrderByWithRelationInput | Customer_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_types.
     */
    cursor?: Customer_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_types.
     */
    distinct?: Customer_typeScalarFieldEnum | Customer_typeScalarFieldEnum[]
  }


  /**
   * Customer_type findMany
   */
  export type Customer_typeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * Filter, which Customer_types to fetch.
     */
    where?: Customer_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_types to fetch.
     */
    orderBy?: Customer_typeOrderByWithRelationInput | Customer_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customer_types.
     */
    cursor?: Customer_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_types.
     */
    skip?: number
    distinct?: Customer_typeScalarFieldEnum | Customer_typeScalarFieldEnum[]
  }


  /**
   * Customer_type create
   */
  export type Customer_typeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer_type.
     */
    data: XOR<Customer_typeCreateInput, Customer_typeUncheckedCreateInput>
  }


  /**
   * Customer_type createMany
   */
  export type Customer_typeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customer_types.
     */
    data: Customer_typeCreateManyInput | Customer_typeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Customer_type update
   */
  export type Customer_typeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer_type.
     */
    data: XOR<Customer_typeUpdateInput, Customer_typeUncheckedUpdateInput>
    /**
     * Choose, which Customer_type to update.
     */
    where: Customer_typeWhereUniqueInput
  }


  /**
   * Customer_type updateMany
   */
  export type Customer_typeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customer_types.
     */
    data: XOR<Customer_typeUpdateManyMutationInput, Customer_typeUncheckedUpdateManyInput>
    /**
     * Filter which Customer_types to update
     */
    where?: Customer_typeWhereInput
  }


  /**
   * Customer_type upsert
   */
  export type Customer_typeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer_type to update in case it exists.
     */
    where: Customer_typeWhereUniqueInput
    /**
     * In case the Customer_type found by the `where` argument doesn't exist, create a new Customer_type with this data.
     */
    create: XOR<Customer_typeCreateInput, Customer_typeUncheckedCreateInput>
    /**
     * In case the Customer_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Customer_typeUpdateInput, Customer_typeUncheckedUpdateInput>
  }


  /**
   * Customer_type delete
   */
  export type Customer_typeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
    /**
     * Filter which Customer_type to delete.
     */
    where: Customer_typeWhereUniqueInput
  }


  /**
   * Customer_type deleteMany
   */
  export type Customer_typeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer_types to delete
     */
    where?: Customer_typeWhereInput
  }


  /**
   * Customer_type.sales_transaction
   */
  export type Customer_type$sales_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    where?: Sales_transactionWhereInput
    orderBy?: Sales_transactionOrderByWithRelationInput | Sales_transactionOrderByWithRelationInput[]
    cursor?: Sales_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_transactionScalarFieldEnum | Sales_transactionScalarFieldEnum[]
  }


  /**
   * Customer_type without action
   */
  export type Customer_typeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_type
     */
    select?: Customer_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Customer_typeInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    product_type_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
    product_type_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    product_code: string | null
    product_name: string | null
    price: number | null
    stock: number | null
    product_type_id: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    product_code: string | null
    product_name: string | null
    price: number | null
    stock: number | null
    product_type_id: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    product_code: number
    product_name: number
    price: number
    stock: number
    product_type_id: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    product_type_id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
    product_type_id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    product_code?: true
    product_name?: true
    price?: true
    stock?: true
    product_type_id?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    product_code?: true
    product_name?: true
    price?: true
    stock?: true
    product_type_id?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    product_code?: true
    product_name?: true
    price?: true
    stock?: true
    product_type_id?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    product_code: string
    product_name: string
    price: number
    stock: number
    product_type_id: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product_code?: boolean
    product_name?: boolean
    price?: boolean
    stock?: boolean
    product_type_id?: boolean
    product_type?: boolean | Product_typeDefaultArgs<ExtArgs>
    item_transaction?: boolean | Product$item_transactionArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product_code?: boolean
    product_name?: boolean
    price?: boolean
    stock?: boolean
    product_type_id?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product_type?: boolean | Product_typeDefaultArgs<ExtArgs>
    item_transaction?: boolean | Product$item_transactionArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      product_type: Prisma.$Product_typePayload<ExtArgs>
      item_transaction: Prisma.$Item_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      product_code: string
      product_name: string
      price: number
      stock: number
      product_type_id: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product_type<T extends Product_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Product_typeDefaultArgs<ExtArgs>>): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    item_transaction<T extends Product$item_transactionArgs<ExtArgs> = {}>(args?: Subset<T, Product$item_transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly product_code: FieldRef<"Product", 'String'>
    readonly product_name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly product_type_id: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.item_transaction
   */
  export type Product$item_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    where?: Item_transactionWhereInput
    orderBy?: Item_transactionOrderByWithRelationInput | Item_transactionOrderByWithRelationInput[]
    cursor?: Item_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_transactionScalarFieldEnum | Item_transactionScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Product_type
   */

  export type AggregateProduct_type = {
    _count: Product_typeCountAggregateOutputType | null
    _avg: Product_typeAvgAggregateOutputType | null
    _sum: Product_typeSumAggregateOutputType | null
    _min: Product_typeMinAggregateOutputType | null
    _max: Product_typeMaxAggregateOutputType | null
  }

  export type Product_typeAvgAggregateOutputType = {
    id: number | null
  }

  export type Product_typeSumAggregateOutputType = {
    id: number | null
  }

  export type Product_typeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    product_type_name: string | null
    product_type_code: string | null
  }

  export type Product_typeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    product_type_name: string | null
    product_type_code: string | null
  }

  export type Product_typeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    product_type_name: number
    product_type_code: number
    _all: number
  }


  export type Product_typeAvgAggregateInputType = {
    id?: true
  }

  export type Product_typeSumAggregateInputType = {
    id?: true
  }

  export type Product_typeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    product_type_name?: true
    product_type_code?: true
  }

  export type Product_typeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    product_type_name?: true
    product_type_code?: true
  }

  export type Product_typeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    product_type_name?: true
    product_type_code?: true
    _all?: true
  }

  export type Product_typeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product_type to aggregate.
     */
    where?: Product_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_types to fetch.
     */
    orderBy?: Product_typeOrderByWithRelationInput | Product_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Product_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Product_types
    **/
    _count?: true | Product_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_typeMaxAggregateInputType
  }

  export type GetProduct_typeAggregateType<T extends Product_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_type[P]>
      : GetScalarType<T[P], AggregateProduct_type[P]>
  }




  export type Product_typeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Product_typeWhereInput
    orderBy?: Product_typeOrderByWithAggregationInput | Product_typeOrderByWithAggregationInput[]
    by: Product_typeScalarFieldEnum[] | Product_typeScalarFieldEnum
    having?: Product_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_typeCountAggregateInputType | true
    _avg?: Product_typeAvgAggregateInputType
    _sum?: Product_typeSumAggregateInputType
    _min?: Product_typeMinAggregateInputType
    _max?: Product_typeMaxAggregateInputType
  }

  export type Product_typeGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    product_type_name: string
    product_type_code: string
    _count: Product_typeCountAggregateOutputType | null
    _avg: Product_typeAvgAggregateOutputType | null
    _sum: Product_typeSumAggregateOutputType | null
    _min: Product_typeMinAggregateOutputType | null
    _max: Product_typeMaxAggregateOutputType | null
  }

  type GetProduct_typeGroupByPayload<T extends Product_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Product_typeGroupByOutputType[P]>
        }
      >
    >


  export type Product_typeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product_type_name?: boolean
    product_type_code?: boolean
    product?: boolean | Product_type$productArgs<ExtArgs>
    _count?: boolean | Product_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_type"]>

  export type Product_typeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product_type_name?: boolean
    product_type_code?: boolean
  }

  export type Product_typeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | Product_type$productArgs<ExtArgs>
    _count?: boolean | Product_typeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Product_typePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Product_type"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      product_type_name: string
      product_type_code: string
    }, ExtArgs["result"]["product_type"]>
    composites: {}
  }


  type Product_typeGetPayload<S extends boolean | null | undefined | Product_typeDefaultArgs> = $Result.GetResult<Prisma.$Product_typePayload, S>

  type Product_typeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Product_typeFindManyArgs, 'select' | 'include'> & {
      select?: Product_typeCountAggregateInputType | true
    }

  export interface Product_typeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product_type'], meta: { name: 'Product_type' } }
    /**
     * Find zero or one Product_type that matches the filter.
     * @param {Product_typeFindUniqueArgs} args - Arguments to find a Product_type
     * @example
     * // Get one Product_type
     * const product_type = await prisma.product_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Product_typeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Product_typeFindUniqueArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product_type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Product_typeFindUniqueOrThrowArgs} args - Arguments to find a Product_type
     * @example
     * // Get one Product_type
     * const product_type = await prisma.product_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Product_typeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Product_typeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeFindFirstArgs} args - Arguments to find a Product_type
     * @example
     * // Get one Product_type
     * const product_type = await prisma.product_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Product_typeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Product_typeFindFirstArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeFindFirstOrThrowArgs} args - Arguments to find a Product_type
     * @example
     * // Get one Product_type
     * const product_type = await prisma.product_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Product_typeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Product_typeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Product_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_types
     * const product_types = await prisma.product_type.findMany()
     * 
     * // Get first 10 Product_types
     * const product_types = await prisma.product_type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_typeWithIdOnly = await prisma.product_type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Product_typeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Product_typeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product_type.
     * @param {Product_typeCreateArgs} args - Arguments to create a Product_type.
     * @example
     * // Create one Product_type
     * const Product_type = await prisma.product_type.create({
     *   data: {
     *     // ... data to create a Product_type
     *   }
     * })
     * 
    **/
    create<T extends Product_typeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Product_typeCreateArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Product_types.
     *     @param {Product_typeCreateManyArgs} args - Arguments to create many Product_types.
     *     @example
     *     // Create many Product_types
     *     const product_type = await prisma.product_type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Product_typeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Product_typeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product_type.
     * @param {Product_typeDeleteArgs} args - Arguments to delete one Product_type.
     * @example
     * // Delete one Product_type
     * const Product_type = await prisma.product_type.delete({
     *   where: {
     *     // ... filter to delete one Product_type
     *   }
     * })
     * 
    **/
    delete<T extends Product_typeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Product_typeDeleteArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product_type.
     * @param {Product_typeUpdateArgs} args - Arguments to update one Product_type.
     * @example
     * // Update one Product_type
     * const product_type = await prisma.product_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Product_typeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Product_typeUpdateArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Product_types.
     * @param {Product_typeDeleteManyArgs} args - Arguments to filter Product_types to delete.
     * @example
     * // Delete a few Product_types
     * const { count } = await prisma.product_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Product_typeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Product_typeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_types
     * const product_type = await prisma.product_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Product_typeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Product_typeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_type.
     * @param {Product_typeUpsertArgs} args - Arguments to update or create a Product_type.
     * @example
     * // Update or create a Product_type
     * const product_type = await prisma.product_type.upsert({
     *   create: {
     *     // ... data to create a Product_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_type we want to update
     *   }
     * })
    **/
    upsert<T extends Product_typeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Product_typeUpsertArgs<ExtArgs>>
    ): Prisma__Product_typeClient<$Result.GetResult<Prisma.$Product_typePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Product_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeCountArgs} args - Arguments to filter Product_types to count.
     * @example
     * // Count the number of Product_types
     * const count = await prisma.product_type.count({
     *   where: {
     *     // ... the filter for the Product_types we want to count
     *   }
     * })
    **/
    count<T extends Product_typeCountArgs>(
      args?: Subset<T, Product_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_typeAggregateArgs>(args: Subset<T, Product_typeAggregateArgs>): Prisma.PrismaPromise<GetProduct_typeAggregateType<T>>

    /**
     * Group by Product_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_typeGroupByArgs} args - Group by arguments.
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
      T extends Product_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Product_typeGroupByArgs['orderBy'] }
        : { orderBy?: Product_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Product_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product_type model
   */
  readonly fields: Product_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Product_typeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends Product_type$productArgs<ExtArgs> = {}>(args?: Subset<T, Product_type$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product_type model
   */ 
  interface Product_typeFieldRefs {
    readonly id: FieldRef<"Product_type", 'Int'>
    readonly createdAt: FieldRef<"Product_type", 'DateTime'>
    readonly updatedAt: FieldRef<"Product_type", 'DateTime'>
    readonly product_type_name: FieldRef<"Product_type", 'String'>
    readonly product_type_code: FieldRef<"Product_type", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Product_type findUnique
   */
  export type Product_typeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * Filter, which Product_type to fetch.
     */
    where: Product_typeWhereUniqueInput
  }


  /**
   * Product_type findUniqueOrThrow
   */
  export type Product_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * Filter, which Product_type to fetch.
     */
    where: Product_typeWhereUniqueInput
  }


  /**
   * Product_type findFirst
   */
  export type Product_typeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * Filter, which Product_type to fetch.
     */
    where?: Product_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_types to fetch.
     */
    orderBy?: Product_typeOrderByWithRelationInput | Product_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Product_types.
     */
    cursor?: Product_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Product_types.
     */
    distinct?: Product_typeScalarFieldEnum | Product_typeScalarFieldEnum[]
  }


  /**
   * Product_type findFirstOrThrow
   */
  export type Product_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * Filter, which Product_type to fetch.
     */
    where?: Product_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_types to fetch.
     */
    orderBy?: Product_typeOrderByWithRelationInput | Product_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Product_types.
     */
    cursor?: Product_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Product_types.
     */
    distinct?: Product_typeScalarFieldEnum | Product_typeScalarFieldEnum[]
  }


  /**
   * Product_type findMany
   */
  export type Product_typeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * Filter, which Product_types to fetch.
     */
    where?: Product_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Product_types to fetch.
     */
    orderBy?: Product_typeOrderByWithRelationInput | Product_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Product_types.
     */
    cursor?: Product_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Product_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Product_types.
     */
    skip?: number
    distinct?: Product_typeScalarFieldEnum | Product_typeScalarFieldEnum[]
  }


  /**
   * Product_type create
   */
  export type Product_typeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a Product_type.
     */
    data: XOR<Product_typeCreateInput, Product_typeUncheckedCreateInput>
  }


  /**
   * Product_type createMany
   */
  export type Product_typeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Product_types.
     */
    data: Product_typeCreateManyInput | Product_typeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product_type update
   */
  export type Product_typeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a Product_type.
     */
    data: XOR<Product_typeUpdateInput, Product_typeUncheckedUpdateInput>
    /**
     * Choose, which Product_type to update.
     */
    where: Product_typeWhereUniqueInput
  }


  /**
   * Product_type updateMany
   */
  export type Product_typeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Product_types.
     */
    data: XOR<Product_typeUpdateManyMutationInput, Product_typeUncheckedUpdateManyInput>
    /**
     * Filter which Product_types to update
     */
    where?: Product_typeWhereInput
  }


  /**
   * Product_type upsert
   */
  export type Product_typeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the Product_type to update in case it exists.
     */
    where: Product_typeWhereUniqueInput
    /**
     * In case the Product_type found by the `where` argument doesn't exist, create a new Product_type with this data.
     */
    create: XOR<Product_typeCreateInput, Product_typeUncheckedCreateInput>
    /**
     * In case the Product_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Product_typeUpdateInput, Product_typeUncheckedUpdateInput>
  }


  /**
   * Product_type delete
   */
  export type Product_typeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
    /**
     * Filter which Product_type to delete.
     */
    where: Product_typeWhereUniqueInput
  }


  /**
   * Product_type deleteMany
   */
  export type Product_typeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product_types to delete
     */
    where?: Product_typeWhereInput
  }


  /**
   * Product_type.product
   */
  export type Product_type$productArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product_type without action
   */
  export type Product_typeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_type
     */
    select?: Product_typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Product_typeInclude<ExtArgs> | null
  }



  /**
   * Model Sales_transaction
   */

  export type AggregateSales_transaction = {
    _count: Sales_transactionCountAggregateOutputType | null
    _avg: Sales_transactionAvgAggregateOutputType | null
    _sum: Sales_transactionSumAggregateOutputType | null
    _min: Sales_transactionMinAggregateOutputType | null
    _max: Sales_transactionMaxAggregateOutputType | null
  }

  export type Sales_transactionAvgAggregateOutputType = {
    id: number | null
    total_price: number | null
    total_discount: number | null
    total_paid_cash: number | null
    total_paid_debit: number | null
    total_paid_credit: number | null
    total_paid_transfer: number | null
    total_paid_ojol: number | null
    cash_back: number | null
    total_nett: number | null
    user_id: number | null
    customer_type_id: number | null
  }

  export type Sales_transactionSumAggregateOutputType = {
    id: number | null
    total_price: number | null
    total_discount: number | null
    total_paid_cash: number | null
    total_paid_debit: number | null
    total_paid_credit: number | null
    total_paid_transfer: number | null
    total_paid_ojol: number | null
    cash_back: number | null
    total_nett: number | null
    user_id: number | null
    customer_type_id: number | null
  }

  export type Sales_transactionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    sales_transaction_number: string | null
    sales_transaction_status: string | null
    total_price: number | null
    total_discount: number | null
    total_paid_cash: number | null
    total_paid_debit: number | null
    total_paid_credit: number | null
    total_paid_transfer: number | null
    total_paid_ojol: number | null
    cash_back: number | null
    total_nett: number | null
    user_id: number | null
    customer_type_id: number | null
  }

  export type Sales_transactionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    sales_transaction_number: string | null
    sales_transaction_status: string | null
    total_price: number | null
    total_discount: number | null
    total_paid_cash: number | null
    total_paid_debit: number | null
    total_paid_credit: number | null
    total_paid_transfer: number | null
    total_paid_ojol: number | null
    cash_back: number | null
    total_nett: number | null
    user_id: number | null
    customer_type_id: number | null
  }

  export type Sales_transactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    sales_transaction_number: number
    sales_transaction_status: number
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
    customer_type_id: number
    _all: number
  }


  export type Sales_transactionAvgAggregateInputType = {
    id?: true
    total_price?: true
    total_discount?: true
    total_paid_cash?: true
    total_paid_debit?: true
    total_paid_credit?: true
    total_paid_transfer?: true
    total_paid_ojol?: true
    cash_back?: true
    total_nett?: true
    user_id?: true
    customer_type_id?: true
  }

  export type Sales_transactionSumAggregateInputType = {
    id?: true
    total_price?: true
    total_discount?: true
    total_paid_cash?: true
    total_paid_debit?: true
    total_paid_credit?: true
    total_paid_transfer?: true
    total_paid_ojol?: true
    cash_back?: true
    total_nett?: true
    user_id?: true
    customer_type_id?: true
  }

  export type Sales_transactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sales_transaction_number?: true
    sales_transaction_status?: true
    total_price?: true
    total_discount?: true
    total_paid_cash?: true
    total_paid_debit?: true
    total_paid_credit?: true
    total_paid_transfer?: true
    total_paid_ojol?: true
    cash_back?: true
    total_nett?: true
    user_id?: true
    customer_type_id?: true
  }

  export type Sales_transactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sales_transaction_number?: true
    sales_transaction_status?: true
    total_price?: true
    total_discount?: true
    total_paid_cash?: true
    total_paid_debit?: true
    total_paid_credit?: true
    total_paid_transfer?: true
    total_paid_ojol?: true
    cash_back?: true
    total_nett?: true
    user_id?: true
    customer_type_id?: true
  }

  export type Sales_transactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    sales_transaction_number?: true
    sales_transaction_status?: true
    total_price?: true
    total_discount?: true
    total_paid_cash?: true
    total_paid_debit?: true
    total_paid_credit?: true
    total_paid_transfer?: true
    total_paid_ojol?: true
    cash_back?: true
    total_nett?: true
    user_id?: true
    customer_type_id?: true
    _all?: true
  }

  export type Sales_transactionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales_transaction to aggregate.
     */
    where?: Sales_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales_transactions to fetch.
     */
    orderBy?: Sales_transactionOrderByWithRelationInput | Sales_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sales_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales_transactions
    **/
    _count?: true | Sales_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sales_transactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sales_transactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sales_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sales_transactionMaxAggregateInputType
  }

  export type GetSales_transactionAggregateType<T extends Sales_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateSales_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales_transaction[P]>
      : GetScalarType<T[P], AggregateSales_transaction[P]>
  }




  export type Sales_transactionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Sales_transactionWhereInput
    orderBy?: Sales_transactionOrderByWithAggregationInput | Sales_transactionOrderByWithAggregationInput[]
    by: Sales_transactionScalarFieldEnum[] | Sales_transactionScalarFieldEnum
    having?: Sales_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sales_transactionCountAggregateInputType | true
    _avg?: Sales_transactionAvgAggregateInputType
    _sum?: Sales_transactionSumAggregateInputType
    _min?: Sales_transactionMinAggregateInputType
    _max?: Sales_transactionMaxAggregateInputType
  }

  export type Sales_transactionGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
    customer_type_id: number
    _count: Sales_transactionCountAggregateOutputType | null
    _avg: Sales_transactionAvgAggregateOutputType | null
    _sum: Sales_transactionSumAggregateOutputType | null
    _min: Sales_transactionMinAggregateOutputType | null
    _max: Sales_transactionMaxAggregateOutputType | null
  }

  type GetSales_transactionGroupByPayload<T extends Sales_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sales_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sales_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sales_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Sales_transactionGroupByOutputType[P]>
        }
      >
    >


  export type Sales_transactionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales_transaction_number?: boolean
    sales_transaction_status?: boolean
    total_price?: boolean
    total_discount?: boolean
    total_paid_cash?: boolean
    total_paid_debit?: boolean
    total_paid_credit?: boolean
    total_paid_transfer?: boolean
    total_paid_ojol?: boolean
    cash_back?: boolean
    total_nett?: boolean
    user_id?: boolean
    customer_type_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer_type?: boolean | Customer_typeDefaultArgs<ExtArgs>
    item_transaction?: boolean | Sales_transaction$item_transactionArgs<ExtArgs>
    _count?: boolean | Sales_transactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_transaction"]>

  export type Sales_transactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales_transaction_number?: boolean
    sales_transaction_status?: boolean
    total_price?: boolean
    total_discount?: boolean
    total_paid_cash?: boolean
    total_paid_debit?: boolean
    total_paid_credit?: boolean
    total_paid_transfer?: boolean
    total_paid_ojol?: boolean
    cash_back?: boolean
    total_nett?: boolean
    user_id?: boolean
    customer_type_id?: boolean
  }

  export type Sales_transactionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    customer_type?: boolean | Customer_typeDefaultArgs<ExtArgs>
    item_transaction?: boolean | Sales_transaction$item_transactionArgs<ExtArgs>
    _count?: boolean | Sales_transactionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Sales_transactionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Sales_transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      customer_type: Prisma.$Customer_typePayload<ExtArgs>
      item_transaction: Prisma.$Item_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      sales_transaction_number: string
      sales_transaction_status: string
      total_price: number
      total_discount: number
      total_paid_cash: number
      total_paid_debit: number
      total_paid_credit: number
      total_paid_transfer: number
      total_paid_ojol: number
      cash_back: number
      total_nett: number
      user_id: number
      customer_type_id: number
    }, ExtArgs["result"]["sales_transaction"]>
    composites: {}
  }


  type Sales_transactionGetPayload<S extends boolean | null | undefined | Sales_transactionDefaultArgs> = $Result.GetResult<Prisma.$Sales_transactionPayload, S>

  type Sales_transactionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Sales_transactionFindManyArgs, 'select' | 'include'> & {
      select?: Sales_transactionCountAggregateInputType | true
    }

  export interface Sales_transactionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales_transaction'], meta: { name: 'Sales_transaction' } }
    /**
     * Find zero or one Sales_transaction that matches the filter.
     * @param {Sales_transactionFindUniqueArgs} args - Arguments to find a Sales_transaction
     * @example
     * // Get one Sales_transaction
     * const sales_transaction = await prisma.sales_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Sales_transactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Sales_transactionFindUniqueArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sales_transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Sales_transactionFindUniqueOrThrowArgs} args - Arguments to find a Sales_transaction
     * @example
     * // Get one Sales_transaction
     * const sales_transaction = await prisma.sales_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Sales_transactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Sales_transactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sales_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionFindFirstArgs} args - Arguments to find a Sales_transaction
     * @example
     * // Get one Sales_transaction
     * const sales_transaction = await prisma.sales_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Sales_transactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Sales_transactionFindFirstArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sales_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionFindFirstOrThrowArgs} args - Arguments to find a Sales_transaction
     * @example
     * // Get one Sales_transaction
     * const sales_transaction = await prisma.sales_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Sales_transactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Sales_transactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sales_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales_transactions
     * const sales_transactions = await prisma.sales_transaction.findMany()
     * 
     * // Get first 10 Sales_transactions
     * const sales_transactions = await prisma.sales_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sales_transactionWithIdOnly = await prisma.sales_transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Sales_transactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Sales_transactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sales_transaction.
     * @param {Sales_transactionCreateArgs} args - Arguments to create a Sales_transaction.
     * @example
     * // Create one Sales_transaction
     * const Sales_transaction = await prisma.sales_transaction.create({
     *   data: {
     *     // ... data to create a Sales_transaction
     *   }
     * })
     * 
    **/
    create<T extends Sales_transactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Sales_transactionCreateArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sales_transactions.
     *     @param {Sales_transactionCreateManyArgs} args - Arguments to create many Sales_transactions.
     *     @example
     *     // Create many Sales_transactions
     *     const sales_transaction = await prisma.sales_transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Sales_transactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Sales_transactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sales_transaction.
     * @param {Sales_transactionDeleteArgs} args - Arguments to delete one Sales_transaction.
     * @example
     * // Delete one Sales_transaction
     * const Sales_transaction = await prisma.sales_transaction.delete({
     *   where: {
     *     // ... filter to delete one Sales_transaction
     *   }
     * })
     * 
    **/
    delete<T extends Sales_transactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Sales_transactionDeleteArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sales_transaction.
     * @param {Sales_transactionUpdateArgs} args - Arguments to update one Sales_transaction.
     * @example
     * // Update one Sales_transaction
     * const sales_transaction = await prisma.sales_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Sales_transactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Sales_transactionUpdateArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sales_transactions.
     * @param {Sales_transactionDeleteManyArgs} args - Arguments to filter Sales_transactions to delete.
     * @example
     * // Delete a few Sales_transactions
     * const { count } = await prisma.sales_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Sales_transactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Sales_transactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales_transactions
     * const sales_transaction = await prisma.sales_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Sales_transactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Sales_transactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sales_transaction.
     * @param {Sales_transactionUpsertArgs} args - Arguments to update or create a Sales_transaction.
     * @example
     * // Update or create a Sales_transaction
     * const sales_transaction = await prisma.sales_transaction.upsert({
     *   create: {
     *     // ... data to create a Sales_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales_transaction we want to update
     *   }
     * })
    **/
    upsert<T extends Sales_transactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Sales_transactionUpsertArgs<ExtArgs>>
    ): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sales_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionCountArgs} args - Arguments to filter Sales_transactions to count.
     * @example
     * // Count the number of Sales_transactions
     * const count = await prisma.sales_transaction.count({
     *   where: {
     *     // ... the filter for the Sales_transactions we want to count
     *   }
     * })
    **/
    count<T extends Sales_transactionCountArgs>(
      args?: Subset<T, Sales_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sales_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Sales_transactionAggregateArgs>(args: Subset<T, Sales_transactionAggregateArgs>): Prisma.PrismaPromise<GetSales_transactionAggregateType<T>>

    /**
     * Group by Sales_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_transactionGroupByArgs} args - Group by arguments.
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
      T extends Sales_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sales_transactionGroupByArgs['orderBy'] }
        : { orderBy?: Sales_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Sales_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSales_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales_transaction model
   */
  readonly fields: Sales_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sales_transactionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    customer_type<T extends Customer_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Customer_typeDefaultArgs<ExtArgs>>): Prisma__Customer_typeClient<$Result.GetResult<Prisma.$Customer_typePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    item_transaction<T extends Sales_transaction$item_transactionArgs<ExtArgs> = {}>(args?: Subset<T, Sales_transaction$item_transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sales_transaction model
   */ 
  interface Sales_transactionFieldRefs {
    readonly id: FieldRef<"Sales_transaction", 'Int'>
    readonly createdAt: FieldRef<"Sales_transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Sales_transaction", 'DateTime'>
    readonly sales_transaction_number: FieldRef<"Sales_transaction", 'String'>
    readonly sales_transaction_status: FieldRef<"Sales_transaction", 'String'>
    readonly total_price: FieldRef<"Sales_transaction", 'Int'>
    readonly total_discount: FieldRef<"Sales_transaction", 'Int'>
    readonly total_paid_cash: FieldRef<"Sales_transaction", 'Int'>
    readonly total_paid_debit: FieldRef<"Sales_transaction", 'Int'>
    readonly total_paid_credit: FieldRef<"Sales_transaction", 'Int'>
    readonly total_paid_transfer: FieldRef<"Sales_transaction", 'Int'>
    readonly total_paid_ojol: FieldRef<"Sales_transaction", 'Int'>
    readonly cash_back: FieldRef<"Sales_transaction", 'Int'>
    readonly total_nett: FieldRef<"Sales_transaction", 'Int'>
    readonly user_id: FieldRef<"Sales_transaction", 'Int'>
    readonly customer_type_id: FieldRef<"Sales_transaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Sales_transaction findUnique
   */
  export type Sales_transactionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Sales_transaction to fetch.
     */
    where: Sales_transactionWhereUniqueInput
  }


  /**
   * Sales_transaction findUniqueOrThrow
   */
  export type Sales_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Sales_transaction to fetch.
     */
    where: Sales_transactionWhereUniqueInput
  }


  /**
   * Sales_transaction findFirst
   */
  export type Sales_transactionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Sales_transaction to fetch.
     */
    where?: Sales_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales_transactions to fetch.
     */
    orderBy?: Sales_transactionOrderByWithRelationInput | Sales_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales_transactions.
     */
    cursor?: Sales_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales_transactions.
     */
    distinct?: Sales_transactionScalarFieldEnum | Sales_transactionScalarFieldEnum[]
  }


  /**
   * Sales_transaction findFirstOrThrow
   */
  export type Sales_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Sales_transaction to fetch.
     */
    where?: Sales_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales_transactions to fetch.
     */
    orderBy?: Sales_transactionOrderByWithRelationInput | Sales_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales_transactions.
     */
    cursor?: Sales_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales_transactions.
     */
    distinct?: Sales_transactionScalarFieldEnum | Sales_transactionScalarFieldEnum[]
  }


  /**
   * Sales_transaction findMany
   */
  export type Sales_transactionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Sales_transactions to fetch.
     */
    where?: Sales_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales_transactions to fetch.
     */
    orderBy?: Sales_transactionOrderByWithRelationInput | Sales_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales_transactions.
     */
    cursor?: Sales_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales_transactions.
     */
    skip?: number
    distinct?: Sales_transactionScalarFieldEnum | Sales_transactionScalarFieldEnum[]
  }


  /**
   * Sales_transaction create
   */
  export type Sales_transactionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales_transaction.
     */
    data: XOR<Sales_transactionCreateInput, Sales_transactionUncheckedCreateInput>
  }


  /**
   * Sales_transaction createMany
   */
  export type Sales_transactionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales_transactions.
     */
    data: Sales_transactionCreateManyInput | Sales_transactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sales_transaction update
   */
  export type Sales_transactionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales_transaction.
     */
    data: XOR<Sales_transactionUpdateInput, Sales_transactionUncheckedUpdateInput>
    /**
     * Choose, which Sales_transaction to update.
     */
    where: Sales_transactionWhereUniqueInput
  }


  /**
   * Sales_transaction updateMany
   */
  export type Sales_transactionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales_transactions.
     */
    data: XOR<Sales_transactionUpdateManyMutationInput, Sales_transactionUncheckedUpdateManyInput>
    /**
     * Filter which Sales_transactions to update
     */
    where?: Sales_transactionWhereInput
  }


  /**
   * Sales_transaction upsert
   */
  export type Sales_transactionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales_transaction to update in case it exists.
     */
    where: Sales_transactionWhereUniqueInput
    /**
     * In case the Sales_transaction found by the `where` argument doesn't exist, create a new Sales_transaction with this data.
     */
    create: XOR<Sales_transactionCreateInput, Sales_transactionUncheckedCreateInput>
    /**
     * In case the Sales_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sales_transactionUpdateInput, Sales_transactionUncheckedUpdateInput>
  }


  /**
   * Sales_transaction delete
   */
  export type Sales_transactionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
    /**
     * Filter which Sales_transaction to delete.
     */
    where: Sales_transactionWhereUniqueInput
  }


  /**
   * Sales_transaction deleteMany
   */
  export type Sales_transactionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales_transactions to delete
     */
    where?: Sales_transactionWhereInput
  }


  /**
   * Sales_transaction.item_transaction
   */
  export type Sales_transaction$item_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    where?: Item_transactionWhereInput
    orderBy?: Item_transactionOrderByWithRelationInput | Item_transactionOrderByWithRelationInput[]
    cursor?: Item_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Item_transactionScalarFieldEnum | Item_transactionScalarFieldEnum[]
  }


  /**
   * Sales_transaction without action
   */
  export type Sales_transactionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales_transaction
     */
    select?: Sales_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sales_transactionInclude<ExtArgs> | null
  }



  /**
   * Model Item_transaction
   */

  export type AggregateItem_transaction = {
    _count: Item_transactionCountAggregateOutputType | null
    _avg: Item_transactionAvgAggregateOutputType | null
    _sum: Item_transactionSumAggregateOutputType | null
    _min: Item_transactionMinAggregateOutputType | null
    _max: Item_transactionMaxAggregateOutputType | null
  }

  export type Item_transactionAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    product_id: number | null
    sales_transaction_id: number | null
  }

  export type Item_transactionSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    product_id: number | null
    sales_transaction_id: number | null
  }

  export type Item_transactionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    quantity: number | null
    product_id: number | null
    sales_transaction_id: number | null
  }

  export type Item_transactionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    quantity: number | null
    product_id: number | null
    sales_transaction_id: number | null
  }

  export type Item_transactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    quantity: number
    product_id: number
    sales_transaction_id: number
    _all: number
  }


  export type Item_transactionAvgAggregateInputType = {
    id?: true
    quantity?: true
    product_id?: true
    sales_transaction_id?: true
  }

  export type Item_transactionSumAggregateInputType = {
    id?: true
    quantity?: true
    product_id?: true
    sales_transaction_id?: true
  }

  export type Item_transactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    quantity?: true
    product_id?: true
    sales_transaction_id?: true
  }

  export type Item_transactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    quantity?: true
    product_id?: true
    sales_transaction_id?: true
  }

  export type Item_transactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    quantity?: true
    product_id?: true
    sales_transaction_id?: true
    _all?: true
  }

  export type Item_transactionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_transaction to aggregate.
     */
    where?: Item_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_transactions to fetch.
     */
    orderBy?: Item_transactionOrderByWithRelationInput | Item_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Item_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Item_transactions
    **/
    _count?: true | Item_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Item_transactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Item_transactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Item_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Item_transactionMaxAggregateInputType
  }

  export type GetItem_transactionAggregateType<T extends Item_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateItem_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem_transaction[P]>
      : GetScalarType<T[P], AggregateItem_transaction[P]>
  }




  export type Item_transactionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Item_transactionWhereInput
    orderBy?: Item_transactionOrderByWithAggregationInput | Item_transactionOrderByWithAggregationInput[]
    by: Item_transactionScalarFieldEnum[] | Item_transactionScalarFieldEnum
    having?: Item_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Item_transactionCountAggregateInputType | true
    _avg?: Item_transactionAvgAggregateInputType
    _sum?: Item_transactionSumAggregateInputType
    _min?: Item_transactionMinAggregateInputType
    _max?: Item_transactionMaxAggregateInputType
  }

  export type Item_transactionGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    quantity: number
    product_id: number
    sales_transaction_id: number
    _count: Item_transactionCountAggregateOutputType | null
    _avg: Item_transactionAvgAggregateOutputType | null
    _sum: Item_transactionSumAggregateOutputType | null
    _min: Item_transactionMinAggregateOutputType | null
    _max: Item_transactionMaxAggregateOutputType | null
  }

  type GetItem_transactionGroupByPayload<T extends Item_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Item_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Item_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Item_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Item_transactionGroupByOutputType[P]>
        }
      >
    >


  export type Item_transactionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quantity?: boolean
    product_id?: boolean
    sales_transaction_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sales_transaction?: boolean | Sales_transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item_transaction"]>

  export type Item_transactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quantity?: boolean
    product_id?: boolean
    sales_transaction_id?: boolean
  }

  export type Item_transactionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    sales_transaction?: boolean | Sales_transactionDefaultArgs<ExtArgs>
  }


  export type $Item_transactionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Item_transaction"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      sales_transaction: Prisma.$Sales_transactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      quantity: number
      product_id: number
      sales_transaction_id: number
    }, ExtArgs["result"]["item_transaction"]>
    composites: {}
  }


  type Item_transactionGetPayload<S extends boolean | null | undefined | Item_transactionDefaultArgs> = $Result.GetResult<Prisma.$Item_transactionPayload, S>

  type Item_transactionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Item_transactionFindManyArgs, 'select' | 'include'> & {
      select?: Item_transactionCountAggregateInputType | true
    }

  export interface Item_transactionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item_transaction'], meta: { name: 'Item_transaction' } }
    /**
     * Find zero or one Item_transaction that matches the filter.
     * @param {Item_transactionFindUniqueArgs} args - Arguments to find a Item_transaction
     * @example
     * // Get one Item_transaction
     * const item_transaction = await prisma.item_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Item_transactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Item_transactionFindUniqueArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item_transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Item_transactionFindUniqueOrThrowArgs} args - Arguments to find a Item_transaction
     * @example
     * // Get one Item_transaction
     * const item_transaction = await prisma.item_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Item_transactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_transactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionFindFirstArgs} args - Arguments to find a Item_transaction
     * @example
     * // Get one Item_transaction
     * const item_transaction = await prisma.item_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Item_transactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_transactionFindFirstArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionFindFirstOrThrowArgs} args - Arguments to find a Item_transaction
     * @example
     * // Get one Item_transaction
     * const item_transaction = await prisma.item_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Item_transactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_transactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Item_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Item_transactions
     * const item_transactions = await prisma.item_transaction.findMany()
     * 
     * // Get first 10 Item_transactions
     * const item_transactions = await prisma.item_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const item_transactionWithIdOnly = await prisma.item_transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Item_transactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_transactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item_transaction.
     * @param {Item_transactionCreateArgs} args - Arguments to create a Item_transaction.
     * @example
     * // Create one Item_transaction
     * const Item_transaction = await prisma.item_transaction.create({
     *   data: {
     *     // ... data to create a Item_transaction
     *   }
     * })
     * 
    **/
    create<T extends Item_transactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Item_transactionCreateArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Item_transactions.
     *     @param {Item_transactionCreateManyArgs} args - Arguments to create many Item_transactions.
     *     @example
     *     // Create many Item_transactions
     *     const item_transaction = await prisma.item_transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Item_transactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_transactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item_transaction.
     * @param {Item_transactionDeleteArgs} args - Arguments to delete one Item_transaction.
     * @example
     * // Delete one Item_transaction
     * const Item_transaction = await prisma.item_transaction.delete({
     *   where: {
     *     // ... filter to delete one Item_transaction
     *   }
     * })
     * 
    **/
    delete<T extends Item_transactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Item_transactionDeleteArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item_transaction.
     * @param {Item_transactionUpdateArgs} args - Arguments to update one Item_transaction.
     * @example
     * // Update one Item_transaction
     * const item_transaction = await prisma.item_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Item_transactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Item_transactionUpdateArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Item_transactions.
     * @param {Item_transactionDeleteManyArgs} args - Arguments to filter Item_transactions to delete.
     * @example
     * // Delete a few Item_transactions
     * const { count } = await prisma.item_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Item_transactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Item_transactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Item_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Item_transactions
     * const item_transaction = await prisma.item_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Item_transactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Item_transactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item_transaction.
     * @param {Item_transactionUpsertArgs} args - Arguments to update or create a Item_transaction.
     * @example
     * // Update or create a Item_transaction
     * const item_transaction = await prisma.item_transaction.upsert({
     *   create: {
     *     // ... data to create a Item_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item_transaction we want to update
     *   }
     * })
    **/
    upsert<T extends Item_transactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Item_transactionUpsertArgs<ExtArgs>>
    ): Prisma__Item_transactionClient<$Result.GetResult<Prisma.$Item_transactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Item_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionCountArgs} args - Arguments to filter Item_transactions to count.
     * @example
     * // Count the number of Item_transactions
     * const count = await prisma.item_transaction.count({
     *   where: {
     *     // ... the filter for the Item_transactions we want to count
     *   }
     * })
    **/
    count<T extends Item_transactionCountArgs>(
      args?: Subset<T, Item_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Item_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Item_transactionAggregateArgs>(args: Subset<T, Item_transactionAggregateArgs>): Prisma.PrismaPromise<GetItem_transactionAggregateType<T>>

    /**
     * Group by Item_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Item_transactionGroupByArgs} args - Group by arguments.
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
      T extends Item_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Item_transactionGroupByArgs['orderBy'] }
        : { orderBy?: Item_transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Item_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItem_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item_transaction model
   */
  readonly fields: Item_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Item_transactionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    sales_transaction<T extends Sales_transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Sales_transactionDefaultArgs<ExtArgs>>): Prisma__Sales_transactionClient<$Result.GetResult<Prisma.$Sales_transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Item_transaction model
   */ 
  interface Item_transactionFieldRefs {
    readonly id: FieldRef<"Item_transaction", 'Int'>
    readonly createdAt: FieldRef<"Item_transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Item_transaction", 'DateTime'>
    readonly quantity: FieldRef<"Item_transaction", 'Int'>
    readonly product_id: FieldRef<"Item_transaction", 'Int'>
    readonly sales_transaction_id: FieldRef<"Item_transaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Item_transaction findUnique
   */
  export type Item_transactionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Item_transaction to fetch.
     */
    where: Item_transactionWhereUniqueInput
  }


  /**
   * Item_transaction findUniqueOrThrow
   */
  export type Item_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Item_transaction to fetch.
     */
    where: Item_transactionWhereUniqueInput
  }


  /**
   * Item_transaction findFirst
   */
  export type Item_transactionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Item_transaction to fetch.
     */
    where?: Item_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_transactions to fetch.
     */
    orderBy?: Item_transactionOrderByWithRelationInput | Item_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_transactions.
     */
    cursor?: Item_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_transactions.
     */
    distinct?: Item_transactionScalarFieldEnum | Item_transactionScalarFieldEnum[]
  }


  /**
   * Item_transaction findFirstOrThrow
   */
  export type Item_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Item_transaction to fetch.
     */
    where?: Item_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_transactions to fetch.
     */
    orderBy?: Item_transactionOrderByWithRelationInput | Item_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Item_transactions.
     */
    cursor?: Item_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Item_transactions.
     */
    distinct?: Item_transactionScalarFieldEnum | Item_transactionScalarFieldEnum[]
  }


  /**
   * Item_transaction findMany
   */
  export type Item_transactionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * Filter, which Item_transactions to fetch.
     */
    where?: Item_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Item_transactions to fetch.
     */
    orderBy?: Item_transactionOrderByWithRelationInput | Item_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Item_transactions.
     */
    cursor?: Item_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Item_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Item_transactions.
     */
    skip?: number
    distinct?: Item_transactionScalarFieldEnum | Item_transactionScalarFieldEnum[]
  }


  /**
   * Item_transaction create
   */
  export type Item_transactionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Item_transaction.
     */
    data: XOR<Item_transactionCreateInput, Item_transactionUncheckedCreateInput>
  }


  /**
   * Item_transaction createMany
   */
  export type Item_transactionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Item_transactions.
     */
    data: Item_transactionCreateManyInput | Item_transactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Item_transaction update
   */
  export type Item_transactionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Item_transaction.
     */
    data: XOR<Item_transactionUpdateInput, Item_transactionUncheckedUpdateInput>
    /**
     * Choose, which Item_transaction to update.
     */
    where: Item_transactionWhereUniqueInput
  }


  /**
   * Item_transaction updateMany
   */
  export type Item_transactionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Item_transactions.
     */
    data: XOR<Item_transactionUpdateManyMutationInput, Item_transactionUncheckedUpdateManyInput>
    /**
     * Filter which Item_transactions to update
     */
    where?: Item_transactionWhereInput
  }


  /**
   * Item_transaction upsert
   */
  export type Item_transactionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Item_transaction to update in case it exists.
     */
    where: Item_transactionWhereUniqueInput
    /**
     * In case the Item_transaction found by the `where` argument doesn't exist, create a new Item_transaction with this data.
     */
    create: XOR<Item_transactionCreateInput, Item_transactionUncheckedCreateInput>
    /**
     * In case the Item_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Item_transactionUpdateInput, Item_transactionUncheckedUpdateInput>
  }


  /**
   * Item_transaction delete
   */
  export type Item_transactionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
    /**
     * Filter which Item_transaction to delete.
     */
    where: Item_transactionWhereUniqueInput
  }


  /**
   * Item_transaction deleteMany
   */
  export type Item_transactionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item_transactions to delete
     */
    where?: Item_transactionWhereInput
  }


  /**
   * Item_transaction without action
   */
  export type Item_transactionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item_transaction
     */
    select?: Item_transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Item_transactionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    user_code: 'user_code',
    name: 'name',
    password: 'password',
    refresh_token: 'refresh_token',
    role: 'role',
    last_login: 'last_login'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Customer_typeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customer_type_code: 'customer_type_code',
    customer_type_name: 'customer_type_name'
  };

  export type Customer_typeScalarFieldEnum = (typeof Customer_typeScalarFieldEnum)[keyof typeof Customer_typeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    product_code: 'product_code',
    product_name: 'product_name',
    price: 'price',
    stock: 'stock',
    product_type_id: 'product_type_id'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const Product_typeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    product_type_name: 'product_type_name',
    product_type_code: 'product_type_code'
  };

  export type Product_typeScalarFieldEnum = (typeof Product_typeScalarFieldEnum)[keyof typeof Product_typeScalarFieldEnum]


  export const Sales_transactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sales_transaction_number: 'sales_transaction_number',
    sales_transaction_status: 'sales_transaction_status',
    total_price: 'total_price',
    total_discount: 'total_discount',
    total_paid_cash: 'total_paid_cash',
    total_paid_debit: 'total_paid_debit',
    total_paid_credit: 'total_paid_credit',
    total_paid_transfer: 'total_paid_transfer',
    total_paid_ojol: 'total_paid_ojol',
    cash_back: 'cash_back',
    total_nett: 'total_nett',
    user_id: 'user_id',
    customer_type_id: 'customer_type_id'
  };

  export type Sales_transactionScalarFieldEnum = (typeof Sales_transactionScalarFieldEnum)[keyof typeof Sales_transactionScalarFieldEnum]


  export const Item_transactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    quantity: 'quantity',
    product_id: 'product_id',
    sales_transaction_id: 'sales_transaction_id'
  };

  export type Item_transactionScalarFieldEnum = (typeof Item_transactionScalarFieldEnum)[keyof typeof Item_transactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    user_code?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refresh_token?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    sales_transaction?: Sales_transactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    role?: SortOrder
    last_login?: SortOrderInput | SortOrder
    sales_transaction?: Sales_transactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    user_code?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refresh_token?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    sales_transaction?: Sales_transactionListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    role?: SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    user_code?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type Customer_typeWhereInput = {
    AND?: Customer_typeWhereInput | Customer_typeWhereInput[]
    OR?: Customer_typeWhereInput[]
    NOT?: Customer_typeWhereInput | Customer_typeWhereInput[]
    id?: IntFilter<"Customer_type"> | number
    createdAt?: DateTimeFilter<"Customer_type"> | Date | string
    updatedAt?: DateTimeFilter<"Customer_type"> | Date | string
    customer_type_code?: StringFilter<"Customer_type"> | string
    customer_type_name?: StringFilter<"Customer_type"> | string
    sales_transaction?: Sales_transactionListRelationFilter
  }

  export type Customer_typeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_type_code?: SortOrder
    customer_type_name?: SortOrder
    sales_transaction?: Sales_transactionOrderByRelationAggregateInput
  }

  export type Customer_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Customer_typeWhereInput | Customer_typeWhereInput[]
    OR?: Customer_typeWhereInput[]
    NOT?: Customer_typeWhereInput | Customer_typeWhereInput[]
    createdAt?: DateTimeFilter<"Customer_type"> | Date | string
    updatedAt?: DateTimeFilter<"Customer_type"> | Date | string
    customer_type_code?: StringFilter<"Customer_type"> | string
    customer_type_name?: StringFilter<"Customer_type"> | string
    sales_transaction?: Sales_transactionListRelationFilter
  }, "id">

  export type Customer_typeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_type_code?: SortOrder
    customer_type_name?: SortOrder
    _count?: Customer_typeCountOrderByAggregateInput
    _avg?: Customer_typeAvgOrderByAggregateInput
    _max?: Customer_typeMaxOrderByAggregateInput
    _min?: Customer_typeMinOrderByAggregateInput
    _sum?: Customer_typeSumOrderByAggregateInput
  }

  export type Customer_typeScalarWhereWithAggregatesInput = {
    AND?: Customer_typeScalarWhereWithAggregatesInput | Customer_typeScalarWhereWithAggregatesInput[]
    OR?: Customer_typeScalarWhereWithAggregatesInput[]
    NOT?: Customer_typeScalarWhereWithAggregatesInput | Customer_typeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer_type"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer_type"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer_type"> | Date | string
    customer_type_code?: StringWithAggregatesFilter<"Customer_type"> | string
    customer_type_name?: StringWithAggregatesFilter<"Customer_type"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    product_code?: StringFilter<"Product"> | string
    product_name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    product_type_id?: IntFilter<"Product"> | number
    product_type?: XOR<Product_typeRelationFilter, Product_typeWhereInput>
    item_transaction?: Item_transactionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
    product_type?: Product_typeOrderByWithRelationInput
    item_transaction?: Item_transactionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    product_code?: StringFilter<"Product"> | string
    product_name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    product_type_id?: IntFilter<"Product"> | number
    product_type?: XOR<Product_typeRelationFilter, Product_typeWhereInput>
    item_transaction?: Item_transactionListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    product_code?: StringWithAggregatesFilter<"Product"> | string
    product_name?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    product_type_id?: IntWithAggregatesFilter<"Product"> | number
  }

  export type Product_typeWhereInput = {
    AND?: Product_typeWhereInput | Product_typeWhereInput[]
    OR?: Product_typeWhereInput[]
    NOT?: Product_typeWhereInput | Product_typeWhereInput[]
    id?: IntFilter<"Product_type"> | number
    createdAt?: DateTimeFilter<"Product_type"> | Date | string
    updatedAt?: DateTimeFilter<"Product_type"> | Date | string
    product_type_name?: StringFilter<"Product_type"> | string
    product_type_code?: StringFilter<"Product_type"> | string
    product?: ProductListRelationFilter
  }

  export type Product_typeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_type_name?: SortOrder
    product_type_code?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type Product_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Product_typeWhereInput | Product_typeWhereInput[]
    OR?: Product_typeWhereInput[]
    NOT?: Product_typeWhereInput | Product_typeWhereInput[]
    createdAt?: DateTimeFilter<"Product_type"> | Date | string
    updatedAt?: DateTimeFilter<"Product_type"> | Date | string
    product_type_name?: StringFilter<"Product_type"> | string
    product_type_code?: StringFilter<"Product_type"> | string
    product?: ProductListRelationFilter
  }, "id">

  export type Product_typeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_type_name?: SortOrder
    product_type_code?: SortOrder
    _count?: Product_typeCountOrderByAggregateInput
    _avg?: Product_typeAvgOrderByAggregateInput
    _max?: Product_typeMaxOrderByAggregateInput
    _min?: Product_typeMinOrderByAggregateInput
    _sum?: Product_typeSumOrderByAggregateInput
  }

  export type Product_typeScalarWhereWithAggregatesInput = {
    AND?: Product_typeScalarWhereWithAggregatesInput | Product_typeScalarWhereWithAggregatesInput[]
    OR?: Product_typeScalarWhereWithAggregatesInput[]
    NOT?: Product_typeScalarWhereWithAggregatesInput | Product_typeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product_type"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product_type"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product_type"> | Date | string
    product_type_name?: StringWithAggregatesFilter<"Product_type"> | string
    product_type_code?: StringWithAggregatesFilter<"Product_type"> | string
  }

  export type Sales_transactionWhereInput = {
    AND?: Sales_transactionWhereInput | Sales_transactionWhereInput[]
    OR?: Sales_transactionWhereInput[]
    NOT?: Sales_transactionWhereInput | Sales_transactionWhereInput[]
    id?: IntFilter<"Sales_transaction"> | number
    createdAt?: DateTimeFilter<"Sales_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Sales_transaction"> | Date | string
    sales_transaction_number?: StringFilter<"Sales_transaction"> | string
    sales_transaction_status?: StringFilter<"Sales_transaction"> | string
    total_price?: IntFilter<"Sales_transaction"> | number
    total_discount?: IntFilter<"Sales_transaction"> | number
    total_paid_cash?: IntFilter<"Sales_transaction"> | number
    total_paid_debit?: IntFilter<"Sales_transaction"> | number
    total_paid_credit?: IntFilter<"Sales_transaction"> | number
    total_paid_transfer?: IntFilter<"Sales_transaction"> | number
    total_paid_ojol?: IntFilter<"Sales_transaction"> | number
    cash_back?: IntFilter<"Sales_transaction"> | number
    total_nett?: IntFilter<"Sales_transaction"> | number
    user_id?: IntFilter<"Sales_transaction"> | number
    customer_type_id?: IntFilter<"Sales_transaction"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer_type?: XOR<Customer_typeRelationFilter, Customer_typeWhereInput>
    item_transaction?: Item_transactionListRelationFilter
  }

  export type Sales_transactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales_transaction_number?: SortOrder
    sales_transaction_status?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
    user?: UserOrderByWithRelationInput
    customer_type?: Customer_typeOrderByWithRelationInput
    item_transaction?: Item_transactionOrderByRelationAggregateInput
  }

  export type Sales_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Sales_transactionWhereInput | Sales_transactionWhereInput[]
    OR?: Sales_transactionWhereInput[]
    NOT?: Sales_transactionWhereInput | Sales_transactionWhereInput[]
    createdAt?: DateTimeFilter<"Sales_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Sales_transaction"> | Date | string
    sales_transaction_number?: StringFilter<"Sales_transaction"> | string
    sales_transaction_status?: StringFilter<"Sales_transaction"> | string
    total_price?: IntFilter<"Sales_transaction"> | number
    total_discount?: IntFilter<"Sales_transaction"> | number
    total_paid_cash?: IntFilter<"Sales_transaction"> | number
    total_paid_debit?: IntFilter<"Sales_transaction"> | number
    total_paid_credit?: IntFilter<"Sales_transaction"> | number
    total_paid_transfer?: IntFilter<"Sales_transaction"> | number
    total_paid_ojol?: IntFilter<"Sales_transaction"> | number
    cash_back?: IntFilter<"Sales_transaction"> | number
    total_nett?: IntFilter<"Sales_transaction"> | number
    user_id?: IntFilter<"Sales_transaction"> | number
    customer_type_id?: IntFilter<"Sales_transaction"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    customer_type?: XOR<Customer_typeRelationFilter, Customer_typeWhereInput>
    item_transaction?: Item_transactionListRelationFilter
  }, "id">

  export type Sales_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales_transaction_number?: SortOrder
    sales_transaction_status?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
    _count?: Sales_transactionCountOrderByAggregateInput
    _avg?: Sales_transactionAvgOrderByAggregateInput
    _max?: Sales_transactionMaxOrderByAggregateInput
    _min?: Sales_transactionMinOrderByAggregateInput
    _sum?: Sales_transactionSumOrderByAggregateInput
  }

  export type Sales_transactionScalarWhereWithAggregatesInput = {
    AND?: Sales_transactionScalarWhereWithAggregatesInput | Sales_transactionScalarWhereWithAggregatesInput[]
    OR?: Sales_transactionScalarWhereWithAggregatesInput[]
    NOT?: Sales_transactionScalarWhereWithAggregatesInput | Sales_transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sales_transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sales_transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sales_transaction"> | Date | string
    sales_transaction_number?: StringWithAggregatesFilter<"Sales_transaction"> | string
    sales_transaction_status?: StringWithAggregatesFilter<"Sales_transaction"> | string
    total_price?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_discount?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_paid_cash?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_paid_debit?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_paid_credit?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_paid_transfer?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_paid_ojol?: IntWithAggregatesFilter<"Sales_transaction"> | number
    cash_back?: IntWithAggregatesFilter<"Sales_transaction"> | number
    total_nett?: IntWithAggregatesFilter<"Sales_transaction"> | number
    user_id?: IntWithAggregatesFilter<"Sales_transaction"> | number
    customer_type_id?: IntWithAggregatesFilter<"Sales_transaction"> | number
  }

  export type Item_transactionWhereInput = {
    AND?: Item_transactionWhereInput | Item_transactionWhereInput[]
    OR?: Item_transactionWhereInput[]
    NOT?: Item_transactionWhereInput | Item_transactionWhereInput[]
    id?: IntFilter<"Item_transaction"> | number
    createdAt?: DateTimeFilter<"Item_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Item_transaction"> | Date | string
    quantity?: IntFilter<"Item_transaction"> | number
    product_id?: IntFilter<"Item_transaction"> | number
    sales_transaction_id?: IntFilter<"Item_transaction"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    sales_transaction?: XOR<Sales_transactionRelationFilter, Sales_transactionWhereInput>
  }

  export type Item_transactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
    product?: ProductOrderByWithRelationInput
    sales_transaction?: Sales_transactionOrderByWithRelationInput
  }

  export type Item_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Item_transactionWhereInput | Item_transactionWhereInput[]
    OR?: Item_transactionWhereInput[]
    NOT?: Item_transactionWhereInput | Item_transactionWhereInput[]
    createdAt?: DateTimeFilter<"Item_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Item_transaction"> | Date | string
    quantity?: IntFilter<"Item_transaction"> | number
    product_id?: IntFilter<"Item_transaction"> | number
    sales_transaction_id?: IntFilter<"Item_transaction"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    sales_transaction?: XOR<Sales_transactionRelationFilter, Sales_transactionWhereInput>
  }, "id">

  export type Item_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
    _count?: Item_transactionCountOrderByAggregateInput
    _avg?: Item_transactionAvgOrderByAggregateInput
    _max?: Item_transactionMaxOrderByAggregateInput
    _min?: Item_transactionMinOrderByAggregateInput
    _sum?: Item_transactionSumOrderByAggregateInput
  }

  export type Item_transactionScalarWhereWithAggregatesInput = {
    AND?: Item_transactionScalarWhereWithAggregatesInput | Item_transactionScalarWhereWithAggregatesInput[]
    OR?: Item_transactionScalarWhereWithAggregatesInput[]
    NOT?: Item_transactionScalarWhereWithAggregatesInput | Item_transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item_transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Item_transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item_transaction"> | Date | string
    quantity?: IntWithAggregatesFilter<"Item_transaction"> | number
    product_id?: IntWithAggregatesFilter<"Item_transaction"> | number
    sales_transaction_id?: IntWithAggregatesFilter<"Item_transaction"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user_code: string
    name: string
    password: string
    refresh_token?: string | null
    role?: string
    last_login?: Date | string | null
    sales_transaction?: Sales_transactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user_code: string
    name: string
    password: string
    refresh_token?: string | null
    role?: string
    last_login?: Date | string | null
    sales_transaction?: Sales_transactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales_transaction?: Sales_transactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales_transaction?: Sales_transactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user_code: string
    name: string
    password: string
    refresh_token?: string | null
    role?: string
    last_login?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Customer_typeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    customer_type_code: string
    customer_type_name: string
    sales_transaction?: Sales_transactionCreateNestedManyWithoutCustomer_typeInput
  }

  export type Customer_typeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer_type_code: string
    customer_type_name: string
    sales_transaction?: Sales_transactionUncheckedCreateNestedManyWithoutCustomer_typeInput
  }

  export type Customer_typeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_type_code?: StringFieldUpdateOperationsInput | string
    customer_type_name?: StringFieldUpdateOperationsInput | string
    sales_transaction?: Sales_transactionUpdateManyWithoutCustomer_typeNestedInput
  }

  export type Customer_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_type_code?: StringFieldUpdateOperationsInput | string
    customer_type_name?: StringFieldUpdateOperationsInput | string
    sales_transaction?: Sales_transactionUncheckedUpdateManyWithoutCustomer_typeNestedInput
  }

  export type Customer_typeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer_type_code: string
    customer_type_name: string
  }

  export type Customer_typeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_type_code?: StringFieldUpdateOperationsInput | string
    customer_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type Customer_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_type_code?: StringFieldUpdateOperationsInput | string
    customer_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    product_type: Product_typeCreateNestedOneWithoutProductInput
    item_transaction?: Item_transactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    product_type_id: number
    item_transaction?: Item_transactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product_type?: Product_typeUpdateOneRequiredWithoutProductNestedInput
    item_transaction?: Item_transactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product_type_id?: IntFieldUpdateOperationsInput | number
    item_transaction?: Item_transactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    product_type_id: number
  }

  export type ProductUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type Product_typeCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    product_type_name: string
    product_type_code: string
    product?: ProductCreateNestedManyWithoutProduct_typeInput
  }

  export type Product_typeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_type_name: string
    product_type_code: string
    product?: ProductUncheckedCreateNestedManyWithoutProduct_typeInput
  }

  export type Product_typeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_name?: StringFieldUpdateOperationsInput | string
    product_type_code?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutProduct_typeNestedInput
  }

  export type Product_typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_name?: StringFieldUpdateOperationsInput | string
    product_type_code?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutProduct_typeNestedInput
  }

  export type Product_typeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_type_name: string
    product_type_code: string
  }

  export type Product_typeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_name?: StringFieldUpdateOperationsInput | string
    product_type_code?: StringFieldUpdateOperationsInput | string
  }

  export type Product_typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_name?: StringFieldUpdateOperationsInput | string
    product_type_code?: StringFieldUpdateOperationsInput | string
  }

  export type Sales_transactionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user: UserCreateNestedOneWithoutSales_transactionInput
    customer_type: Customer_typeCreateNestedOneWithoutSales_transactionInput
    item_transaction?: Item_transactionCreateNestedManyWithoutSales_transactionInput
  }

  export type Sales_transactionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
    customer_type_id: number
    item_transaction?: Item_transactionUncheckedCreateNestedManyWithoutSales_transactionInput
  }

  export type Sales_transactionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSales_transactionNestedInput
    customer_type?: Customer_typeUpdateOneRequiredWithoutSales_transactionNestedInput
    item_transaction?: Item_transactionUpdateManyWithoutSales_transactionNestedInput
  }

  export type Sales_transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_type_id?: IntFieldUpdateOperationsInput | number
    item_transaction?: Item_transactionUncheckedUpdateManyWithoutSales_transactionNestedInput
  }

  export type Sales_transactionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
    customer_type_id: number
  }

  export type Sales_transactionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
  }

  export type Sales_transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    product: ProductCreateNestedOneWithoutItem_transactionInput
    sales_transaction: Sales_transactionCreateNestedOneWithoutItem_transactionInput
  }

  export type Item_transactionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    product_id: number
    sales_transaction_id: number
  }

  export type Item_transactionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItem_transactionNestedInput
    sales_transaction?: Sales_transactionUpdateOneRequiredWithoutItem_transactionNestedInput
  }

  export type Item_transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    sales_transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    product_id: number
    sales_transaction_id: number
  }

  export type Item_transactionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    sales_transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Sales_transactionListRelationFilter = {
    every?: Sales_transactionWhereInput
    some?: Sales_transactionWhereInput
    none?: Sales_transactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Sales_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refresh_token?: SortOrder
    role?: SortOrder
    last_login?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refresh_token?: SortOrder
    role?: SortOrder
    last_login?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    password?: SortOrder
    refresh_token?: SortOrder
    role?: SortOrder
    last_login?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Customer_typeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_type_code?: SortOrder
    customer_type_name?: SortOrder
  }

  export type Customer_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Customer_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_type_code?: SortOrder
    customer_type_name?: SortOrder
  }

  export type Customer_typeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_type_code?: SortOrder
    customer_type_name?: SortOrder
  }

  export type Customer_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Product_typeRelationFilter = {
    is?: Product_typeWhereInput
    isNot?: Product_typeWhereInput
  }

  export type Item_transactionListRelationFilter = {
    every?: Item_transactionWhereInput
    some?: Item_transactionWhereInput
    none?: Item_transactionWhereInput
  }

  export type Item_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_code?: SortOrder
    product_name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    product_type_id?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Product_typeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_type_name?: SortOrder
    product_type_code?: SortOrder
  }

  export type Product_typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Product_typeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_type_name?: SortOrder
    product_type_code?: SortOrder
  }

  export type Product_typeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product_type_name?: SortOrder
    product_type_code?: SortOrder
  }

  export type Product_typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Customer_typeRelationFilter = {
    is?: Customer_typeWhereInput
    isNot?: Customer_typeWhereInput
  }

  export type Sales_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales_transaction_number?: SortOrder
    sales_transaction_status?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
  }

  export type Sales_transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
  }

  export type Sales_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales_transaction_number?: SortOrder
    sales_transaction_status?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
  }

  export type Sales_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales_transaction_number?: SortOrder
    sales_transaction_status?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
  }

  export type Sales_transactionSumOrderByAggregateInput = {
    id?: SortOrder
    total_price?: SortOrder
    total_discount?: SortOrder
    total_paid_cash?: SortOrder
    total_paid_debit?: SortOrder
    total_paid_credit?: SortOrder
    total_paid_transfer?: SortOrder
    total_paid_ojol?: SortOrder
    cash_back?: SortOrder
    total_nett?: SortOrder
    user_id?: SortOrder
    customer_type_id?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type Sales_transactionRelationFilter = {
    is?: Sales_transactionWhereInput
    isNot?: Sales_transactionWhereInput
  }

  export type Item_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
  }

  export type Item_transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
  }

  export type Item_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
  }

  export type Item_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
  }

  export type Item_transactionSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    product_id?: SortOrder
    sales_transaction_id?: SortOrder
  }

  export type Sales_transactionCreateNestedManyWithoutUserInput = {
    create?: XOR<Sales_transactionCreateWithoutUserInput, Sales_transactionUncheckedCreateWithoutUserInput> | Sales_transactionCreateWithoutUserInput[] | Sales_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutUserInput | Sales_transactionCreateOrConnectWithoutUserInput[]
    createMany?: Sales_transactionCreateManyUserInputEnvelope
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
  }

  export type Sales_transactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Sales_transactionCreateWithoutUserInput, Sales_transactionUncheckedCreateWithoutUserInput> | Sales_transactionCreateWithoutUserInput[] | Sales_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutUserInput | Sales_transactionCreateOrConnectWithoutUserInput[]
    createMany?: Sales_transactionCreateManyUserInputEnvelope
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Sales_transactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Sales_transactionCreateWithoutUserInput, Sales_transactionUncheckedCreateWithoutUserInput> | Sales_transactionCreateWithoutUserInput[] | Sales_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutUserInput | Sales_transactionCreateOrConnectWithoutUserInput[]
    upsert?: Sales_transactionUpsertWithWhereUniqueWithoutUserInput | Sales_transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Sales_transactionCreateManyUserInputEnvelope
    set?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    disconnect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    delete?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    update?: Sales_transactionUpdateWithWhereUniqueWithoutUserInput | Sales_transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Sales_transactionUpdateManyWithWhereWithoutUserInput | Sales_transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Sales_transactionScalarWhereInput | Sales_transactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Sales_transactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Sales_transactionCreateWithoutUserInput, Sales_transactionUncheckedCreateWithoutUserInput> | Sales_transactionCreateWithoutUserInput[] | Sales_transactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutUserInput | Sales_transactionCreateOrConnectWithoutUserInput[]
    upsert?: Sales_transactionUpsertWithWhereUniqueWithoutUserInput | Sales_transactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Sales_transactionCreateManyUserInputEnvelope
    set?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    disconnect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    delete?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    update?: Sales_transactionUpdateWithWhereUniqueWithoutUserInput | Sales_transactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Sales_transactionUpdateManyWithWhereWithoutUserInput | Sales_transactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Sales_transactionScalarWhereInput | Sales_transactionScalarWhereInput[]
  }

  export type Sales_transactionCreateNestedManyWithoutCustomer_typeInput = {
    create?: XOR<Sales_transactionCreateWithoutCustomer_typeInput, Sales_transactionUncheckedCreateWithoutCustomer_typeInput> | Sales_transactionCreateWithoutCustomer_typeInput[] | Sales_transactionUncheckedCreateWithoutCustomer_typeInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutCustomer_typeInput | Sales_transactionCreateOrConnectWithoutCustomer_typeInput[]
    createMany?: Sales_transactionCreateManyCustomer_typeInputEnvelope
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
  }

  export type Sales_transactionUncheckedCreateNestedManyWithoutCustomer_typeInput = {
    create?: XOR<Sales_transactionCreateWithoutCustomer_typeInput, Sales_transactionUncheckedCreateWithoutCustomer_typeInput> | Sales_transactionCreateWithoutCustomer_typeInput[] | Sales_transactionUncheckedCreateWithoutCustomer_typeInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutCustomer_typeInput | Sales_transactionCreateOrConnectWithoutCustomer_typeInput[]
    createMany?: Sales_transactionCreateManyCustomer_typeInputEnvelope
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
  }

  export type Sales_transactionUpdateManyWithoutCustomer_typeNestedInput = {
    create?: XOR<Sales_transactionCreateWithoutCustomer_typeInput, Sales_transactionUncheckedCreateWithoutCustomer_typeInput> | Sales_transactionCreateWithoutCustomer_typeInput[] | Sales_transactionUncheckedCreateWithoutCustomer_typeInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutCustomer_typeInput | Sales_transactionCreateOrConnectWithoutCustomer_typeInput[]
    upsert?: Sales_transactionUpsertWithWhereUniqueWithoutCustomer_typeInput | Sales_transactionUpsertWithWhereUniqueWithoutCustomer_typeInput[]
    createMany?: Sales_transactionCreateManyCustomer_typeInputEnvelope
    set?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    disconnect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    delete?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    update?: Sales_transactionUpdateWithWhereUniqueWithoutCustomer_typeInput | Sales_transactionUpdateWithWhereUniqueWithoutCustomer_typeInput[]
    updateMany?: Sales_transactionUpdateManyWithWhereWithoutCustomer_typeInput | Sales_transactionUpdateManyWithWhereWithoutCustomer_typeInput[]
    deleteMany?: Sales_transactionScalarWhereInput | Sales_transactionScalarWhereInput[]
  }

  export type Sales_transactionUncheckedUpdateManyWithoutCustomer_typeNestedInput = {
    create?: XOR<Sales_transactionCreateWithoutCustomer_typeInput, Sales_transactionUncheckedCreateWithoutCustomer_typeInput> | Sales_transactionCreateWithoutCustomer_typeInput[] | Sales_transactionUncheckedCreateWithoutCustomer_typeInput[]
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutCustomer_typeInput | Sales_transactionCreateOrConnectWithoutCustomer_typeInput[]
    upsert?: Sales_transactionUpsertWithWhereUniqueWithoutCustomer_typeInput | Sales_transactionUpsertWithWhereUniqueWithoutCustomer_typeInput[]
    createMany?: Sales_transactionCreateManyCustomer_typeInputEnvelope
    set?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    disconnect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    delete?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    connect?: Sales_transactionWhereUniqueInput | Sales_transactionWhereUniqueInput[]
    update?: Sales_transactionUpdateWithWhereUniqueWithoutCustomer_typeInput | Sales_transactionUpdateWithWhereUniqueWithoutCustomer_typeInput[]
    updateMany?: Sales_transactionUpdateManyWithWhereWithoutCustomer_typeInput | Sales_transactionUpdateManyWithWhereWithoutCustomer_typeInput[]
    deleteMany?: Sales_transactionScalarWhereInput | Sales_transactionScalarWhereInput[]
  }

  export type Product_typeCreateNestedOneWithoutProductInput = {
    create?: XOR<Product_typeCreateWithoutProductInput, Product_typeUncheckedCreateWithoutProductInput>
    connectOrCreate?: Product_typeCreateOrConnectWithoutProductInput
    connect?: Product_typeWhereUniqueInput
  }

  export type Item_transactionCreateNestedManyWithoutProductInput = {
    create?: XOR<Item_transactionCreateWithoutProductInput, Item_transactionUncheckedCreateWithoutProductInput> | Item_transactionCreateWithoutProductInput[] | Item_transactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutProductInput | Item_transactionCreateOrConnectWithoutProductInput[]
    createMany?: Item_transactionCreateManyProductInputEnvelope
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
  }

  export type Item_transactionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Item_transactionCreateWithoutProductInput, Item_transactionUncheckedCreateWithoutProductInput> | Item_transactionCreateWithoutProductInput[] | Item_transactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutProductInput | Item_transactionCreateOrConnectWithoutProductInput[]
    createMany?: Item_transactionCreateManyProductInputEnvelope
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
  }

  export type Product_typeUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<Product_typeCreateWithoutProductInput, Product_typeUncheckedCreateWithoutProductInput>
    connectOrCreate?: Product_typeCreateOrConnectWithoutProductInput
    upsert?: Product_typeUpsertWithoutProductInput
    connect?: Product_typeWhereUniqueInput
    update?: XOR<XOR<Product_typeUpdateToOneWithWhereWithoutProductInput, Product_typeUpdateWithoutProductInput>, Product_typeUncheckedUpdateWithoutProductInput>
  }

  export type Item_transactionUpdateManyWithoutProductNestedInput = {
    create?: XOR<Item_transactionCreateWithoutProductInput, Item_transactionUncheckedCreateWithoutProductInput> | Item_transactionCreateWithoutProductInput[] | Item_transactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutProductInput | Item_transactionCreateOrConnectWithoutProductInput[]
    upsert?: Item_transactionUpsertWithWhereUniqueWithoutProductInput | Item_transactionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Item_transactionCreateManyProductInputEnvelope
    set?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    disconnect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    delete?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    update?: Item_transactionUpdateWithWhereUniqueWithoutProductInput | Item_transactionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Item_transactionUpdateManyWithWhereWithoutProductInput | Item_transactionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Item_transactionScalarWhereInput | Item_transactionScalarWhereInput[]
  }

  export type Item_transactionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Item_transactionCreateWithoutProductInput, Item_transactionUncheckedCreateWithoutProductInput> | Item_transactionCreateWithoutProductInput[] | Item_transactionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutProductInput | Item_transactionCreateOrConnectWithoutProductInput[]
    upsert?: Item_transactionUpsertWithWhereUniqueWithoutProductInput | Item_transactionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Item_transactionCreateManyProductInputEnvelope
    set?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    disconnect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    delete?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    update?: Item_transactionUpdateWithWhereUniqueWithoutProductInput | Item_transactionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Item_transactionUpdateManyWithWhereWithoutProductInput | Item_transactionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Item_transactionScalarWhereInput | Item_transactionScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutProduct_typeInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutProduct_typeInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutProduct_typeNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProduct_typeInput | ProductUpsertWithWhereUniqueWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProduct_typeInput | ProductUpdateWithWhereUniqueWithoutProduct_typeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProduct_typeInput | ProductUpdateManyWithWhereWithoutProduct_typeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutProduct_typeNestedInput = {
    create?: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput> | ProductCreateWithoutProduct_typeInput[] | ProductUncheckedCreateWithoutProduct_typeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutProduct_typeInput | ProductCreateOrConnectWithoutProduct_typeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutProduct_typeInput | ProductUpsertWithWhereUniqueWithoutProduct_typeInput[]
    createMany?: ProductCreateManyProduct_typeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutProduct_typeInput | ProductUpdateWithWhereUniqueWithoutProduct_typeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutProduct_typeInput | ProductUpdateManyWithWhereWithoutProduct_typeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSales_transactionInput = {
    create?: XOR<UserCreateWithoutSales_transactionInput, UserUncheckedCreateWithoutSales_transactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSales_transactionInput
    connect?: UserWhereUniqueInput
  }

  export type Customer_typeCreateNestedOneWithoutSales_transactionInput = {
    create?: XOR<Customer_typeCreateWithoutSales_transactionInput, Customer_typeUncheckedCreateWithoutSales_transactionInput>
    connectOrCreate?: Customer_typeCreateOrConnectWithoutSales_transactionInput
    connect?: Customer_typeWhereUniqueInput
  }

  export type Item_transactionCreateNestedManyWithoutSales_transactionInput = {
    create?: XOR<Item_transactionCreateWithoutSales_transactionInput, Item_transactionUncheckedCreateWithoutSales_transactionInput> | Item_transactionCreateWithoutSales_transactionInput[] | Item_transactionUncheckedCreateWithoutSales_transactionInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutSales_transactionInput | Item_transactionCreateOrConnectWithoutSales_transactionInput[]
    createMany?: Item_transactionCreateManySales_transactionInputEnvelope
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
  }

  export type Item_transactionUncheckedCreateNestedManyWithoutSales_transactionInput = {
    create?: XOR<Item_transactionCreateWithoutSales_transactionInput, Item_transactionUncheckedCreateWithoutSales_transactionInput> | Item_transactionCreateWithoutSales_transactionInput[] | Item_transactionUncheckedCreateWithoutSales_transactionInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutSales_transactionInput | Item_transactionCreateOrConnectWithoutSales_transactionInput[]
    createMany?: Item_transactionCreateManySales_transactionInputEnvelope
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSales_transactionNestedInput = {
    create?: XOR<UserCreateWithoutSales_transactionInput, UserUncheckedCreateWithoutSales_transactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSales_transactionInput
    upsert?: UserUpsertWithoutSales_transactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSales_transactionInput, UserUpdateWithoutSales_transactionInput>, UserUncheckedUpdateWithoutSales_transactionInput>
  }

  export type Customer_typeUpdateOneRequiredWithoutSales_transactionNestedInput = {
    create?: XOR<Customer_typeCreateWithoutSales_transactionInput, Customer_typeUncheckedCreateWithoutSales_transactionInput>
    connectOrCreate?: Customer_typeCreateOrConnectWithoutSales_transactionInput
    upsert?: Customer_typeUpsertWithoutSales_transactionInput
    connect?: Customer_typeWhereUniqueInput
    update?: XOR<XOR<Customer_typeUpdateToOneWithWhereWithoutSales_transactionInput, Customer_typeUpdateWithoutSales_transactionInput>, Customer_typeUncheckedUpdateWithoutSales_transactionInput>
  }

  export type Item_transactionUpdateManyWithoutSales_transactionNestedInput = {
    create?: XOR<Item_transactionCreateWithoutSales_transactionInput, Item_transactionUncheckedCreateWithoutSales_transactionInput> | Item_transactionCreateWithoutSales_transactionInput[] | Item_transactionUncheckedCreateWithoutSales_transactionInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutSales_transactionInput | Item_transactionCreateOrConnectWithoutSales_transactionInput[]
    upsert?: Item_transactionUpsertWithWhereUniqueWithoutSales_transactionInput | Item_transactionUpsertWithWhereUniqueWithoutSales_transactionInput[]
    createMany?: Item_transactionCreateManySales_transactionInputEnvelope
    set?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    disconnect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    delete?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    update?: Item_transactionUpdateWithWhereUniqueWithoutSales_transactionInput | Item_transactionUpdateWithWhereUniqueWithoutSales_transactionInput[]
    updateMany?: Item_transactionUpdateManyWithWhereWithoutSales_transactionInput | Item_transactionUpdateManyWithWhereWithoutSales_transactionInput[]
    deleteMany?: Item_transactionScalarWhereInput | Item_transactionScalarWhereInput[]
  }

  export type Item_transactionUncheckedUpdateManyWithoutSales_transactionNestedInput = {
    create?: XOR<Item_transactionCreateWithoutSales_transactionInput, Item_transactionUncheckedCreateWithoutSales_transactionInput> | Item_transactionCreateWithoutSales_transactionInput[] | Item_transactionUncheckedCreateWithoutSales_transactionInput[]
    connectOrCreate?: Item_transactionCreateOrConnectWithoutSales_transactionInput | Item_transactionCreateOrConnectWithoutSales_transactionInput[]
    upsert?: Item_transactionUpsertWithWhereUniqueWithoutSales_transactionInput | Item_transactionUpsertWithWhereUniqueWithoutSales_transactionInput[]
    createMany?: Item_transactionCreateManySales_transactionInputEnvelope
    set?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    disconnect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    delete?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    connect?: Item_transactionWhereUniqueInput | Item_transactionWhereUniqueInput[]
    update?: Item_transactionUpdateWithWhereUniqueWithoutSales_transactionInput | Item_transactionUpdateWithWhereUniqueWithoutSales_transactionInput[]
    updateMany?: Item_transactionUpdateManyWithWhereWithoutSales_transactionInput | Item_transactionUpdateManyWithWhereWithoutSales_transactionInput[]
    deleteMany?: Item_transactionScalarWhereInput | Item_transactionScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutItem_transactionInput = {
    create?: XOR<ProductCreateWithoutItem_transactionInput, ProductUncheckedCreateWithoutItem_transactionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItem_transactionInput
    connect?: ProductWhereUniqueInput
  }

  export type Sales_transactionCreateNestedOneWithoutItem_transactionInput = {
    create?: XOR<Sales_transactionCreateWithoutItem_transactionInput, Sales_transactionUncheckedCreateWithoutItem_transactionInput>
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutItem_transactionInput
    connect?: Sales_transactionWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutItem_transactionNestedInput = {
    create?: XOR<ProductCreateWithoutItem_transactionInput, ProductUncheckedCreateWithoutItem_transactionInput>
    connectOrCreate?: ProductCreateOrConnectWithoutItem_transactionInput
    upsert?: ProductUpsertWithoutItem_transactionInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutItem_transactionInput, ProductUpdateWithoutItem_transactionInput>, ProductUncheckedUpdateWithoutItem_transactionInput>
  }

  export type Sales_transactionUpdateOneRequiredWithoutItem_transactionNestedInput = {
    create?: XOR<Sales_transactionCreateWithoutItem_transactionInput, Sales_transactionUncheckedCreateWithoutItem_transactionInput>
    connectOrCreate?: Sales_transactionCreateOrConnectWithoutItem_transactionInput
    upsert?: Sales_transactionUpsertWithoutItem_transactionInput
    connect?: Sales_transactionWhereUniqueInput
    update?: XOR<XOR<Sales_transactionUpdateToOneWithWhereWithoutItem_transactionInput, Sales_transactionUpdateWithoutItem_transactionInput>, Sales_transactionUncheckedUpdateWithoutItem_transactionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Sales_transactionCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    customer_type: Customer_typeCreateNestedOneWithoutSales_transactionInput
    item_transaction?: Item_transactionCreateNestedManyWithoutSales_transactionInput
  }

  export type Sales_transactionUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    customer_type_id: number
    item_transaction?: Item_transactionUncheckedCreateNestedManyWithoutSales_transactionInput
  }

  export type Sales_transactionCreateOrConnectWithoutUserInput = {
    where: Sales_transactionWhereUniqueInput
    create: XOR<Sales_transactionCreateWithoutUserInput, Sales_transactionUncheckedCreateWithoutUserInput>
  }

  export type Sales_transactionCreateManyUserInputEnvelope = {
    data: Sales_transactionCreateManyUserInput | Sales_transactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Sales_transactionUpsertWithWhereUniqueWithoutUserInput = {
    where: Sales_transactionWhereUniqueInput
    update: XOR<Sales_transactionUpdateWithoutUserInput, Sales_transactionUncheckedUpdateWithoutUserInput>
    create: XOR<Sales_transactionCreateWithoutUserInput, Sales_transactionUncheckedCreateWithoutUserInput>
  }

  export type Sales_transactionUpdateWithWhereUniqueWithoutUserInput = {
    where: Sales_transactionWhereUniqueInput
    data: XOR<Sales_transactionUpdateWithoutUserInput, Sales_transactionUncheckedUpdateWithoutUserInput>
  }

  export type Sales_transactionUpdateManyWithWhereWithoutUserInput = {
    where: Sales_transactionScalarWhereInput
    data: XOR<Sales_transactionUpdateManyMutationInput, Sales_transactionUncheckedUpdateManyWithoutUserInput>
  }

  export type Sales_transactionScalarWhereInput = {
    AND?: Sales_transactionScalarWhereInput | Sales_transactionScalarWhereInput[]
    OR?: Sales_transactionScalarWhereInput[]
    NOT?: Sales_transactionScalarWhereInput | Sales_transactionScalarWhereInput[]
    id?: IntFilter<"Sales_transaction"> | number
    createdAt?: DateTimeFilter<"Sales_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Sales_transaction"> | Date | string
    sales_transaction_number?: StringFilter<"Sales_transaction"> | string
    sales_transaction_status?: StringFilter<"Sales_transaction"> | string
    total_price?: IntFilter<"Sales_transaction"> | number
    total_discount?: IntFilter<"Sales_transaction"> | number
    total_paid_cash?: IntFilter<"Sales_transaction"> | number
    total_paid_debit?: IntFilter<"Sales_transaction"> | number
    total_paid_credit?: IntFilter<"Sales_transaction"> | number
    total_paid_transfer?: IntFilter<"Sales_transaction"> | number
    total_paid_ojol?: IntFilter<"Sales_transaction"> | number
    cash_back?: IntFilter<"Sales_transaction"> | number
    total_nett?: IntFilter<"Sales_transaction"> | number
    user_id?: IntFilter<"Sales_transaction"> | number
    customer_type_id?: IntFilter<"Sales_transaction"> | number
  }

  export type Sales_transactionCreateWithoutCustomer_typeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user: UserCreateNestedOneWithoutSales_transactionInput
    item_transaction?: Item_transactionCreateNestedManyWithoutSales_transactionInput
  }

  export type Sales_transactionUncheckedCreateWithoutCustomer_typeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
    item_transaction?: Item_transactionUncheckedCreateNestedManyWithoutSales_transactionInput
  }

  export type Sales_transactionCreateOrConnectWithoutCustomer_typeInput = {
    where: Sales_transactionWhereUniqueInput
    create: XOR<Sales_transactionCreateWithoutCustomer_typeInput, Sales_transactionUncheckedCreateWithoutCustomer_typeInput>
  }

  export type Sales_transactionCreateManyCustomer_typeInputEnvelope = {
    data: Sales_transactionCreateManyCustomer_typeInput | Sales_transactionCreateManyCustomer_typeInput[]
    skipDuplicates?: boolean
  }

  export type Sales_transactionUpsertWithWhereUniqueWithoutCustomer_typeInput = {
    where: Sales_transactionWhereUniqueInput
    update: XOR<Sales_transactionUpdateWithoutCustomer_typeInput, Sales_transactionUncheckedUpdateWithoutCustomer_typeInput>
    create: XOR<Sales_transactionCreateWithoutCustomer_typeInput, Sales_transactionUncheckedCreateWithoutCustomer_typeInput>
  }

  export type Sales_transactionUpdateWithWhereUniqueWithoutCustomer_typeInput = {
    where: Sales_transactionWhereUniqueInput
    data: XOR<Sales_transactionUpdateWithoutCustomer_typeInput, Sales_transactionUncheckedUpdateWithoutCustomer_typeInput>
  }

  export type Sales_transactionUpdateManyWithWhereWithoutCustomer_typeInput = {
    where: Sales_transactionScalarWhereInput
    data: XOR<Sales_transactionUpdateManyMutationInput, Sales_transactionUncheckedUpdateManyWithoutCustomer_typeInput>
  }

  export type Product_typeCreateWithoutProductInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    product_type_name: string
    product_type_code: string
  }

  export type Product_typeUncheckedCreateWithoutProductInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_type_name: string
    product_type_code: string
  }

  export type Product_typeCreateOrConnectWithoutProductInput = {
    where: Product_typeWhereUniqueInput
    create: XOR<Product_typeCreateWithoutProductInput, Product_typeUncheckedCreateWithoutProductInput>
  }

  export type Item_transactionCreateWithoutProductInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    sales_transaction: Sales_transactionCreateNestedOneWithoutItem_transactionInput
  }

  export type Item_transactionUncheckedCreateWithoutProductInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    sales_transaction_id: number
  }

  export type Item_transactionCreateOrConnectWithoutProductInput = {
    where: Item_transactionWhereUniqueInput
    create: XOR<Item_transactionCreateWithoutProductInput, Item_transactionUncheckedCreateWithoutProductInput>
  }

  export type Item_transactionCreateManyProductInputEnvelope = {
    data: Item_transactionCreateManyProductInput | Item_transactionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Product_typeUpsertWithoutProductInput = {
    update: XOR<Product_typeUpdateWithoutProductInput, Product_typeUncheckedUpdateWithoutProductInput>
    create: XOR<Product_typeCreateWithoutProductInput, Product_typeUncheckedCreateWithoutProductInput>
    where?: Product_typeWhereInput
  }

  export type Product_typeUpdateToOneWithWhereWithoutProductInput = {
    where?: Product_typeWhereInput
    data: XOR<Product_typeUpdateWithoutProductInput, Product_typeUncheckedUpdateWithoutProductInput>
  }

  export type Product_typeUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_name?: StringFieldUpdateOperationsInput | string
    product_type_code?: StringFieldUpdateOperationsInput | string
  }

  export type Product_typeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_type_name?: StringFieldUpdateOperationsInput | string
    product_type_code?: StringFieldUpdateOperationsInput | string
  }

  export type Item_transactionUpsertWithWhereUniqueWithoutProductInput = {
    where: Item_transactionWhereUniqueInput
    update: XOR<Item_transactionUpdateWithoutProductInput, Item_transactionUncheckedUpdateWithoutProductInput>
    create: XOR<Item_transactionCreateWithoutProductInput, Item_transactionUncheckedCreateWithoutProductInput>
  }

  export type Item_transactionUpdateWithWhereUniqueWithoutProductInput = {
    where: Item_transactionWhereUniqueInput
    data: XOR<Item_transactionUpdateWithoutProductInput, Item_transactionUncheckedUpdateWithoutProductInput>
  }

  export type Item_transactionUpdateManyWithWhereWithoutProductInput = {
    where: Item_transactionScalarWhereInput
    data: XOR<Item_transactionUpdateManyMutationInput, Item_transactionUncheckedUpdateManyWithoutProductInput>
  }

  export type Item_transactionScalarWhereInput = {
    AND?: Item_transactionScalarWhereInput | Item_transactionScalarWhereInput[]
    OR?: Item_transactionScalarWhereInput[]
    NOT?: Item_transactionScalarWhereInput | Item_transactionScalarWhereInput[]
    id?: IntFilter<"Item_transaction"> | number
    createdAt?: DateTimeFilter<"Item_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Item_transaction"> | Date | string
    quantity?: IntFilter<"Item_transaction"> | number
    product_id?: IntFilter<"Item_transaction"> | number
    sales_transaction_id?: IntFilter<"Item_transaction"> | number
  }

  export type ProductCreateWithoutProduct_typeInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    item_transaction?: Item_transactionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProduct_typeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    item_transaction?: Item_transactionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProduct_typeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput>
  }

  export type ProductCreateManyProduct_typeInputEnvelope = {
    data: ProductCreateManyProduct_typeInput | ProductCreateManyProduct_typeInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutProduct_typeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutProduct_typeInput, ProductUncheckedUpdateWithoutProduct_typeInput>
    create: XOR<ProductCreateWithoutProduct_typeInput, ProductUncheckedCreateWithoutProduct_typeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutProduct_typeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutProduct_typeInput, ProductUncheckedUpdateWithoutProduct_typeInput>
  }

  export type ProductUpdateManyWithWhereWithoutProduct_typeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProduct_typeInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    product_code?: StringFilter<"Product"> | string
    product_name?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    product_type_id?: IntFilter<"Product"> | number
  }

  export type UserCreateWithoutSales_transactionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user_code: string
    name: string
    password: string
    refresh_token?: string | null
    role?: string
    last_login?: Date | string | null
  }

  export type UserUncheckedCreateWithoutSales_transactionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user_code: string
    name: string
    password: string
    refresh_token?: string | null
    role?: string
    last_login?: Date | string | null
  }

  export type UserCreateOrConnectWithoutSales_transactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSales_transactionInput, UserUncheckedCreateWithoutSales_transactionInput>
  }

  export type Customer_typeCreateWithoutSales_transactionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    customer_type_code: string
    customer_type_name: string
  }

  export type Customer_typeUncheckedCreateWithoutSales_transactionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer_type_code: string
    customer_type_name: string
  }

  export type Customer_typeCreateOrConnectWithoutSales_transactionInput = {
    where: Customer_typeWhereUniqueInput
    create: XOR<Customer_typeCreateWithoutSales_transactionInput, Customer_typeUncheckedCreateWithoutSales_transactionInput>
  }

  export type Item_transactionCreateWithoutSales_transactionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    product: ProductCreateNestedOneWithoutItem_transactionInput
  }

  export type Item_transactionUncheckedCreateWithoutSales_transactionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    product_id: number
  }

  export type Item_transactionCreateOrConnectWithoutSales_transactionInput = {
    where: Item_transactionWhereUniqueInput
    create: XOR<Item_transactionCreateWithoutSales_transactionInput, Item_transactionUncheckedCreateWithoutSales_transactionInput>
  }

  export type Item_transactionCreateManySales_transactionInputEnvelope = {
    data: Item_transactionCreateManySales_transactionInput | Item_transactionCreateManySales_transactionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSales_transactionInput = {
    update: XOR<UserUpdateWithoutSales_transactionInput, UserUncheckedUpdateWithoutSales_transactionInput>
    create: XOR<UserCreateWithoutSales_transactionInput, UserUncheckedCreateWithoutSales_transactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSales_transactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSales_transactionInput, UserUncheckedUpdateWithoutSales_transactionInput>
  }

  export type UserUpdateWithoutSales_transactionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutSales_transactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Customer_typeUpsertWithoutSales_transactionInput = {
    update: XOR<Customer_typeUpdateWithoutSales_transactionInput, Customer_typeUncheckedUpdateWithoutSales_transactionInput>
    create: XOR<Customer_typeCreateWithoutSales_transactionInput, Customer_typeUncheckedCreateWithoutSales_transactionInput>
    where?: Customer_typeWhereInput
  }

  export type Customer_typeUpdateToOneWithWhereWithoutSales_transactionInput = {
    where?: Customer_typeWhereInput
    data: XOR<Customer_typeUpdateWithoutSales_transactionInput, Customer_typeUncheckedUpdateWithoutSales_transactionInput>
  }

  export type Customer_typeUpdateWithoutSales_transactionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_type_code?: StringFieldUpdateOperationsInput | string
    customer_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type Customer_typeUncheckedUpdateWithoutSales_transactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_type_code?: StringFieldUpdateOperationsInput | string
    customer_type_name?: StringFieldUpdateOperationsInput | string
  }

  export type Item_transactionUpsertWithWhereUniqueWithoutSales_transactionInput = {
    where: Item_transactionWhereUniqueInput
    update: XOR<Item_transactionUpdateWithoutSales_transactionInput, Item_transactionUncheckedUpdateWithoutSales_transactionInput>
    create: XOR<Item_transactionCreateWithoutSales_transactionInput, Item_transactionUncheckedCreateWithoutSales_transactionInput>
  }

  export type Item_transactionUpdateWithWhereUniqueWithoutSales_transactionInput = {
    where: Item_transactionWhereUniqueInput
    data: XOR<Item_transactionUpdateWithoutSales_transactionInput, Item_transactionUncheckedUpdateWithoutSales_transactionInput>
  }

  export type Item_transactionUpdateManyWithWhereWithoutSales_transactionInput = {
    where: Item_transactionScalarWhereInput
    data: XOR<Item_transactionUpdateManyMutationInput, Item_transactionUncheckedUpdateManyWithoutSales_transactionInput>
  }

  export type ProductCreateWithoutItem_transactionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    product_type: Product_typeCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutItem_transactionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
    product_type_id: number
  }

  export type ProductCreateOrConnectWithoutItem_transactionInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutItem_transactionInput, ProductUncheckedCreateWithoutItem_transactionInput>
  }

  export type Sales_transactionCreateWithoutItem_transactionInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user: UserCreateNestedOneWithoutSales_transactionInput
    customer_type: Customer_typeCreateNestedOneWithoutSales_transactionInput
  }

  export type Sales_transactionUncheckedCreateWithoutItem_transactionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
    customer_type_id: number
  }

  export type Sales_transactionCreateOrConnectWithoutItem_transactionInput = {
    where: Sales_transactionWhereUniqueInput
    create: XOR<Sales_transactionCreateWithoutItem_transactionInput, Sales_transactionUncheckedCreateWithoutItem_transactionInput>
  }

  export type ProductUpsertWithoutItem_transactionInput = {
    update: XOR<ProductUpdateWithoutItem_transactionInput, ProductUncheckedUpdateWithoutItem_transactionInput>
    create: XOR<ProductCreateWithoutItem_transactionInput, ProductUncheckedCreateWithoutItem_transactionInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutItem_transactionInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutItem_transactionInput, ProductUncheckedUpdateWithoutItem_transactionInput>
  }

  export type ProductUpdateWithoutItem_transactionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product_type?: Product_typeUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutItem_transactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type Sales_transactionUpsertWithoutItem_transactionInput = {
    update: XOR<Sales_transactionUpdateWithoutItem_transactionInput, Sales_transactionUncheckedUpdateWithoutItem_transactionInput>
    create: XOR<Sales_transactionCreateWithoutItem_transactionInput, Sales_transactionUncheckedCreateWithoutItem_transactionInput>
    where?: Sales_transactionWhereInput
  }

  export type Sales_transactionUpdateToOneWithWhereWithoutItem_transactionInput = {
    where?: Sales_transactionWhereInput
    data: XOR<Sales_transactionUpdateWithoutItem_transactionInput, Sales_transactionUncheckedUpdateWithoutItem_transactionInput>
  }

  export type Sales_transactionUpdateWithoutItem_transactionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSales_transactionNestedInput
    customer_type?: Customer_typeUpdateOneRequiredWithoutSales_transactionNestedInput
  }

  export type Sales_transactionUncheckedUpdateWithoutItem_transactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type Sales_transactionCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    customer_type_id: number
  }

  export type Sales_transactionUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    customer_type?: Customer_typeUpdateOneRequiredWithoutSales_transactionNestedInput
    item_transaction?: Item_transactionUpdateManyWithoutSales_transactionNestedInput
  }

  export type Sales_transactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    customer_type_id?: IntFieldUpdateOperationsInput | number
    item_transaction?: Item_transactionUncheckedUpdateManyWithoutSales_transactionNestedInput
  }

  export type Sales_transactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    customer_type_id?: IntFieldUpdateOperationsInput | number
  }

  export type Sales_transactionCreateManyCustomer_typeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales_transaction_number: string
    sales_transaction_status: string
    total_price: number
    total_discount: number
    total_paid_cash: number
    total_paid_debit: number
    total_paid_credit: number
    total_paid_transfer: number
    total_paid_ojol: number
    cash_back: number
    total_nett: number
    user_id: number
  }

  export type Sales_transactionUpdateWithoutCustomer_typeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSales_transactionNestedInput
    item_transaction?: Item_transactionUpdateManyWithoutSales_transactionNestedInput
  }

  export type Sales_transactionUncheckedUpdateWithoutCustomer_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    item_transaction?: Item_transactionUncheckedUpdateManyWithoutSales_transactionNestedInput
  }

  export type Sales_transactionUncheckedUpdateManyWithoutCustomer_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales_transaction_number?: StringFieldUpdateOperationsInput | string
    sales_transaction_status?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    total_discount?: IntFieldUpdateOperationsInput | number
    total_paid_cash?: IntFieldUpdateOperationsInput | number
    total_paid_debit?: IntFieldUpdateOperationsInput | number
    total_paid_credit?: IntFieldUpdateOperationsInput | number
    total_paid_transfer?: IntFieldUpdateOperationsInput | number
    total_paid_ojol?: IntFieldUpdateOperationsInput | number
    cash_back?: IntFieldUpdateOperationsInput | number
    total_nett?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionCreateManyProductInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    sales_transaction_id: number
  }

  export type Item_transactionUpdateWithoutProductInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    sales_transaction?: Sales_transactionUpdateOneRequiredWithoutItem_transactionNestedInput
  }

  export type Item_transactionUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    sales_transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    sales_transaction_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyProduct_typeInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product_code: string
    product_name: string
    price: number
    stock?: number
  }

  export type ProductUpdateWithoutProduct_typeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    item_transaction?: Item_transactionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProduct_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    item_transaction?: Item_transactionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutProduct_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product_code?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionCreateManySales_transactionInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quantity: number
    product_id: number
  }

  export type Item_transactionUpdateWithoutSales_transactionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutItem_transactionNestedInput
  }

  export type Item_transactionUncheckedUpdateWithoutSales_transactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type Item_transactionUncheckedUpdateManyWithoutSales_transactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Customer_typeDefaultArgs instead
     */
    export type Customer_typeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Customer_typeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Product_typeDefaultArgs instead
     */
    export type Product_typeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Product_typeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Sales_transactionDefaultArgs instead
     */
    export type Sales_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Sales_transactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Item_transactionDefaultArgs instead
     */
    export type Item_transactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Item_transactionDefaultArgs<ExtArgs>

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