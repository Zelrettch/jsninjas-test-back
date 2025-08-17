
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Superhero
 * 
 */
export type Superhero = $Result.DefaultSelection<Prisma.$SuperheroPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Superheroes
 * const superheroes = await prisma.superhero.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Superheroes
   * const superheroes = await prisma.superhero.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.superhero`: Exposes CRUD operations for the **Superhero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Superheroes
    * const superheroes = await prisma.superhero.findMany()
    * ```
    */
  get superhero(): Prisma.SuperheroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Superhero: 'Superhero',
    Image: 'Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "superhero" | "image"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Superhero: {
        payload: Prisma.$SuperheroPayload<ExtArgs>
        fields: Prisma.SuperheroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperheroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperheroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          findFirst: {
            args: Prisma.SuperheroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperheroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          findMany: {
            args: Prisma.SuperheroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>[]
          }
          create: {
            args: Prisma.SuperheroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          createMany: {
            args: Prisma.SuperheroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperheroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>[]
          }
          delete: {
            args: Prisma.SuperheroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          update: {
            args: Prisma.SuperheroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          deleteMany: {
            args: Prisma.SuperheroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperheroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuperheroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>[]
          }
          upsert: {
            args: Prisma.SuperheroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          aggregate: {
            args: Prisma.SuperheroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperhero>
          }
          groupBy: {
            args: Prisma.SuperheroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperheroGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperheroCountArgs<ExtArgs>
            result: $Utils.Optional<SuperheroCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    superhero?: SuperheroOmit
    image?: ImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type SuperheroCountOutputType
   */

  export type SuperheroCountOutputType = {
    images: number
  }

  export type SuperheroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SuperheroCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SuperheroCountOutputType without action
   */
  export type SuperheroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperheroCountOutputType
     */
    select?: SuperheroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuperheroCountOutputType without action
   */
  export type SuperheroCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Superhero
   */

  export type AggregateSuperhero = {
    _count: SuperheroCountAggregateOutputType | null
    _avg: SuperheroAvgAggregateOutputType | null
    _sum: SuperheroSumAggregateOutputType | null
    _min: SuperheroMinAggregateOutputType | null
    _max: SuperheroMaxAggregateOutputType | null
  }

  export type SuperheroAvgAggregateOutputType = {
    id: number | null
  }

  export type SuperheroSumAggregateOutputType = {
    id: number | null
  }

  export type SuperheroMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    real_name: string | null
    origin_description: string | null
    superpowers: string | null
    catch_phrase: string | null
    createdAt: Date | null
    updatedAt: Date | null
    thumbnailName: string | null
  }

  export type SuperheroMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    real_name: string | null
    origin_description: string | null
    superpowers: string | null
    catch_phrase: string | null
    createdAt: Date | null
    updatedAt: Date | null
    thumbnailName: string | null
  }

  export type SuperheroCountAggregateOutputType = {
    id: number
    nickname: number
    real_name: number
    origin_description: number
    superpowers: number
    catch_phrase: number
    createdAt: number
    updatedAt: number
    thumbnailName: number
    _all: number
  }


  export type SuperheroAvgAggregateInputType = {
    id?: true
  }

  export type SuperheroSumAggregateInputType = {
    id?: true
  }

  export type SuperheroMinAggregateInputType = {
    id?: true
    nickname?: true
    real_name?: true
    origin_description?: true
    superpowers?: true
    catch_phrase?: true
    createdAt?: true
    updatedAt?: true
    thumbnailName?: true
  }

  export type SuperheroMaxAggregateInputType = {
    id?: true
    nickname?: true
    real_name?: true
    origin_description?: true
    superpowers?: true
    catch_phrase?: true
    createdAt?: true
    updatedAt?: true
    thumbnailName?: true
  }

  export type SuperheroCountAggregateInputType = {
    id?: true
    nickname?: true
    real_name?: true
    origin_description?: true
    superpowers?: true
    catch_phrase?: true
    createdAt?: true
    updatedAt?: true
    thumbnailName?: true
    _all?: true
  }

  export type SuperheroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Superhero to aggregate.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Superheroes
    **/
    _count?: true | SuperheroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperheroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperheroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperheroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperheroMaxAggregateInputType
  }

  export type GetSuperheroAggregateType<T extends SuperheroAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperhero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperhero[P]>
      : GetScalarType<T[P], AggregateSuperhero[P]>
  }




  export type SuperheroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperheroWhereInput
    orderBy?: SuperheroOrderByWithAggregationInput | SuperheroOrderByWithAggregationInput[]
    by: SuperheroScalarFieldEnum[] | SuperheroScalarFieldEnum
    having?: SuperheroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperheroCountAggregateInputType | true
    _avg?: SuperheroAvgAggregateInputType
    _sum?: SuperheroSumAggregateInputType
    _min?: SuperheroMinAggregateInputType
    _max?: SuperheroMaxAggregateInputType
  }

  export type SuperheroGroupByOutputType = {
    id: number
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt: Date
    updatedAt: Date
    thumbnailName: string | null
    _count: SuperheroCountAggregateOutputType | null
    _avg: SuperheroAvgAggregateOutputType | null
    _sum: SuperheroSumAggregateOutputType | null
    _min: SuperheroMinAggregateOutputType | null
    _max: SuperheroMaxAggregateOutputType | null
  }

  type GetSuperheroGroupByPayload<T extends SuperheroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperheroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperheroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperheroGroupByOutputType[P]>
            : GetScalarType<T[P], SuperheroGroupByOutputType[P]>
        }
      >
    >


  export type SuperheroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    real_name?: boolean
    origin_description?: boolean
    superpowers?: boolean
    catch_phrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thumbnailName?: boolean
    images?: boolean | Superhero$imagesArgs<ExtArgs>
    thumbnail?: boolean | Superhero$thumbnailArgs<ExtArgs>
    _count?: boolean | SuperheroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superhero"]>

  export type SuperheroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    real_name?: boolean
    origin_description?: boolean
    superpowers?: boolean
    catch_phrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thumbnailName?: boolean
    thumbnail?: boolean | Superhero$thumbnailArgs<ExtArgs>
  }, ExtArgs["result"]["superhero"]>

  export type SuperheroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    real_name?: boolean
    origin_description?: boolean
    superpowers?: boolean
    catch_phrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thumbnailName?: boolean
    thumbnail?: boolean | Superhero$thumbnailArgs<ExtArgs>
  }, ExtArgs["result"]["superhero"]>

  export type SuperheroSelectScalar = {
    id?: boolean
    nickname?: boolean
    real_name?: boolean
    origin_description?: boolean
    superpowers?: boolean
    catch_phrase?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    thumbnailName?: boolean
  }

  export type SuperheroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "real_name" | "origin_description" | "superpowers" | "catch_phrase" | "createdAt" | "updatedAt" | "thumbnailName", ExtArgs["result"]["superhero"]>
  export type SuperheroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Superhero$imagesArgs<ExtArgs>
    thumbnail?: boolean | Superhero$thumbnailArgs<ExtArgs>
    _count?: boolean | SuperheroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuperheroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thumbnail?: boolean | Superhero$thumbnailArgs<ExtArgs>
  }
  export type SuperheroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thumbnail?: boolean | Superhero$thumbnailArgs<ExtArgs>
  }

  export type $SuperheroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Superhero"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      thumbnail: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string
      real_name: string
      origin_description: string
      superpowers: string
      catch_phrase: string
      createdAt: Date
      updatedAt: Date
      thumbnailName: string | null
    }, ExtArgs["result"]["superhero"]>
    composites: {}
  }

  type SuperheroGetPayload<S extends boolean | null | undefined | SuperheroDefaultArgs> = $Result.GetResult<Prisma.$SuperheroPayload, S>

  type SuperheroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperheroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperheroCountAggregateInputType | true
    }

  export interface SuperheroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Superhero'], meta: { name: 'Superhero' } }
    /**
     * Find zero or one Superhero that matches the filter.
     * @param {SuperheroFindUniqueArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperheroFindUniqueArgs>(args: SelectSubset<T, SuperheroFindUniqueArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Superhero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperheroFindUniqueOrThrowArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperheroFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperheroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Superhero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroFindFirstArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperheroFindFirstArgs>(args?: SelectSubset<T, SuperheroFindFirstArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Superhero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroFindFirstOrThrowArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperheroFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperheroFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Superheroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Superheroes
     * const superheroes = await prisma.superhero.findMany()
     * 
     * // Get first 10 Superheroes
     * const superheroes = await prisma.superhero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superheroWithIdOnly = await prisma.superhero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperheroFindManyArgs>(args?: SelectSubset<T, SuperheroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Superhero.
     * @param {SuperheroCreateArgs} args - Arguments to create a Superhero.
     * @example
     * // Create one Superhero
     * const Superhero = await prisma.superhero.create({
     *   data: {
     *     // ... data to create a Superhero
     *   }
     * })
     * 
     */
    create<T extends SuperheroCreateArgs>(args: SelectSubset<T, SuperheroCreateArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Superheroes.
     * @param {SuperheroCreateManyArgs} args - Arguments to create many Superheroes.
     * @example
     * // Create many Superheroes
     * const superhero = await prisma.superhero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperheroCreateManyArgs>(args?: SelectSubset<T, SuperheroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Superheroes and returns the data saved in the database.
     * @param {SuperheroCreateManyAndReturnArgs} args - Arguments to create many Superheroes.
     * @example
     * // Create many Superheroes
     * const superhero = await prisma.superhero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Superheroes and only return the `id`
     * const superheroWithIdOnly = await prisma.superhero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperheroCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperheroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Superhero.
     * @param {SuperheroDeleteArgs} args - Arguments to delete one Superhero.
     * @example
     * // Delete one Superhero
     * const Superhero = await prisma.superhero.delete({
     *   where: {
     *     // ... filter to delete one Superhero
     *   }
     * })
     * 
     */
    delete<T extends SuperheroDeleteArgs>(args: SelectSubset<T, SuperheroDeleteArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Superhero.
     * @param {SuperheroUpdateArgs} args - Arguments to update one Superhero.
     * @example
     * // Update one Superhero
     * const superhero = await prisma.superhero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperheroUpdateArgs>(args: SelectSubset<T, SuperheroUpdateArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Superheroes.
     * @param {SuperheroDeleteManyArgs} args - Arguments to filter Superheroes to delete.
     * @example
     * // Delete a few Superheroes
     * const { count } = await prisma.superhero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperheroDeleteManyArgs>(args?: SelectSubset<T, SuperheroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Superheroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Superheroes
     * const superhero = await prisma.superhero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperheroUpdateManyArgs>(args: SelectSubset<T, SuperheroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Superheroes and returns the data updated in the database.
     * @param {SuperheroUpdateManyAndReturnArgs} args - Arguments to update many Superheroes.
     * @example
     * // Update many Superheroes
     * const superhero = await prisma.superhero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Superheroes and only return the `id`
     * const superheroWithIdOnly = await prisma.superhero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuperheroUpdateManyAndReturnArgs>(args: SelectSubset<T, SuperheroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Superhero.
     * @param {SuperheroUpsertArgs} args - Arguments to update or create a Superhero.
     * @example
     * // Update or create a Superhero
     * const superhero = await prisma.superhero.upsert({
     *   create: {
     *     // ... data to create a Superhero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Superhero we want to update
     *   }
     * })
     */
    upsert<T extends SuperheroUpsertArgs>(args: SelectSubset<T, SuperheroUpsertArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Superheroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroCountArgs} args - Arguments to filter Superheroes to count.
     * @example
     * // Count the number of Superheroes
     * const count = await prisma.superhero.count({
     *   where: {
     *     // ... the filter for the Superheroes we want to count
     *   }
     * })
    **/
    count<T extends SuperheroCountArgs>(
      args?: Subset<T, SuperheroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperheroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Superhero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperheroAggregateArgs>(args: Subset<T, SuperheroAggregateArgs>): Prisma.PrismaPromise<GetSuperheroAggregateType<T>>

    /**
     * Group by Superhero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroGroupByArgs} args - Group by arguments.
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
      T extends SuperheroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperheroGroupByArgs['orderBy'] }
        : { orderBy?: SuperheroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperheroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperheroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Superhero model
   */
  readonly fields: SuperheroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Superhero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperheroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Superhero$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Superhero$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thumbnail<T extends Superhero$thumbnailArgs<ExtArgs> = {}>(args?: Subset<T, Superhero$thumbnailArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Superhero model
   */
  interface SuperheroFieldRefs {
    readonly id: FieldRef<"Superhero", 'Int'>
    readonly nickname: FieldRef<"Superhero", 'String'>
    readonly real_name: FieldRef<"Superhero", 'String'>
    readonly origin_description: FieldRef<"Superhero", 'String'>
    readonly superpowers: FieldRef<"Superhero", 'String'>
    readonly catch_phrase: FieldRef<"Superhero", 'String'>
    readonly createdAt: FieldRef<"Superhero", 'DateTime'>
    readonly updatedAt: FieldRef<"Superhero", 'DateTime'>
    readonly thumbnailName: FieldRef<"Superhero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Superhero findUnique
   */
  export type SuperheroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero findUniqueOrThrow
   */
  export type SuperheroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero findFirst
   */
  export type SuperheroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Superheroes.
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Superheroes.
     */
    distinct?: SuperheroScalarFieldEnum | SuperheroScalarFieldEnum[]
  }

  /**
   * Superhero findFirstOrThrow
   */
  export type SuperheroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Superheroes.
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Superheroes.
     */
    distinct?: SuperheroScalarFieldEnum | SuperheroScalarFieldEnum[]
  }

  /**
   * Superhero findMany
   */
  export type SuperheroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * Filter, which Superheroes to fetch.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Superheroes.
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    distinct?: SuperheroScalarFieldEnum | SuperheroScalarFieldEnum[]
  }

  /**
   * Superhero create
   */
  export type SuperheroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * The data needed to create a Superhero.
     */
    data: XOR<SuperheroCreateInput, SuperheroUncheckedCreateInput>
  }

  /**
   * Superhero createMany
   */
  export type SuperheroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Superheroes.
     */
    data: SuperheroCreateManyInput | SuperheroCreateManyInput[]
  }

  /**
   * Superhero createManyAndReturn
   */
  export type SuperheroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The data used to create many Superheroes.
     */
    data: SuperheroCreateManyInput | SuperheroCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Superhero update
   */
  export type SuperheroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * The data needed to update a Superhero.
     */
    data: XOR<SuperheroUpdateInput, SuperheroUncheckedUpdateInput>
    /**
     * Choose, which Superhero to update.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero updateMany
   */
  export type SuperheroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Superheroes.
     */
    data: XOR<SuperheroUpdateManyMutationInput, SuperheroUncheckedUpdateManyInput>
    /**
     * Filter which Superheroes to update
     */
    where?: SuperheroWhereInput
    /**
     * Limit how many Superheroes to update.
     */
    limit?: number
  }

  /**
   * Superhero updateManyAndReturn
   */
  export type SuperheroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The data used to update Superheroes.
     */
    data: XOR<SuperheroUpdateManyMutationInput, SuperheroUncheckedUpdateManyInput>
    /**
     * Filter which Superheroes to update
     */
    where?: SuperheroWhereInput
    /**
     * Limit how many Superheroes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Superhero upsert
   */
  export type SuperheroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * The filter to search for the Superhero to update in case it exists.
     */
    where: SuperheroWhereUniqueInput
    /**
     * In case the Superhero found by the `where` argument doesn't exist, create a new Superhero with this data.
     */
    create: XOR<SuperheroCreateInput, SuperheroUncheckedCreateInput>
    /**
     * In case the Superhero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperheroUpdateInput, SuperheroUncheckedUpdateInput>
  }

  /**
   * Superhero delete
   */
  export type SuperheroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    /**
     * Filter which Superhero to delete.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero deleteMany
   */
  export type SuperheroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Superheroes to delete
     */
    where?: SuperheroWhereInput
    /**
     * Limit how many Superheroes to delete.
     */
    limit?: number
  }

  /**
   * Superhero.images
   */
  export type Superhero$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Superhero.thumbnail
   */
  export type Superhero$thumbnailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Superhero without action
   */
  export type SuperheroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
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
    superheroId: number | null
  }

  export type ImageSumAggregateOutputType = {
    superheroId: number | null
  }

  export type ImageMinAggregateOutputType = {
    name: string | null
    superheroId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    name: string | null
    superheroId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    name: number
    superheroId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    superheroId?: true
  }

  export type ImageSumAggregateInputType = {
    superheroId?: true
  }

  export type ImageMinAggregateInputType = {
    name?: true
    superheroId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    name?: true
    superheroId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    name?: true
    superheroId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
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




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
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
    name: string
    superheroId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    superheroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    superhero?: boolean | Image$superheroArgs<ExtArgs>
    thumbnailFor?: boolean | Image$thumbnailForArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    superheroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    superhero?: boolean | Image$superheroArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    superheroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    superhero?: boolean | Image$superheroArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    name?: boolean
    superheroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "superheroId" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superhero?: boolean | Image$superheroArgs<ExtArgs>
    thumbnailFor?: boolean | Image$thumbnailForArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superhero?: boolean | Image$superheroArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superhero?: boolean | Image$superheroArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      superhero: Prisma.$SuperheroPayload<ExtArgs> | null
      thumbnailFor: Prisma.$SuperheroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      superheroId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
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
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const imageWithNameOnly = await prisma.image.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `name`
     * const imageWithNameOnly = await prisma.image.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `name`
     * const imageWithNameOnly = await prisma.image.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    superhero<T extends Image$superheroArgs<ExtArgs> = {}>(args?: Subset<T, Image$superheroArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    thumbnailFor<T extends Image$thumbnailForArgs<ExtArgs> = {}>(args?: Subset<T, Image$thumbnailForArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly name: FieldRef<"Image", 'String'>
    readonly superheroId: FieldRef<"Image", 'Int'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.superhero
   */
  export type Image$superheroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    where?: SuperheroWhereInput
  }

  /**
   * Image.thumbnailFor
   */
  export type Image$thumbnailForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperheroInclude<ExtArgs> | null
    where?: SuperheroWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SuperheroScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    real_name: 'real_name',
    origin_description: 'origin_description',
    superpowers: 'superpowers',
    catch_phrase: 'catch_phrase',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    thumbnailName: 'thumbnailName'
  };

  export type SuperheroScalarFieldEnum = (typeof SuperheroScalarFieldEnum)[keyof typeof SuperheroScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    name: 'name',
    superheroId: 'superheroId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SuperheroWhereInput = {
    AND?: SuperheroWhereInput | SuperheroWhereInput[]
    OR?: SuperheroWhereInput[]
    NOT?: SuperheroWhereInput | SuperheroWhereInput[]
    id?: IntFilter<"Superhero"> | number
    nickname?: StringFilter<"Superhero"> | string
    real_name?: StringFilter<"Superhero"> | string
    origin_description?: StringFilter<"Superhero"> | string
    superpowers?: StringFilter<"Superhero"> | string
    catch_phrase?: StringFilter<"Superhero"> | string
    createdAt?: DateTimeFilter<"Superhero"> | Date | string
    updatedAt?: DateTimeFilter<"Superhero"> | Date | string
    thumbnailName?: StringNullableFilter<"Superhero"> | string | null
    images?: ImageListRelationFilter
    thumbnail?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type SuperheroOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    origin_description?: SortOrder
    superpowers?: SortOrder
    catch_phrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thumbnailName?: SortOrderInput | SortOrder
    images?: ImageOrderByRelationAggregateInput
    thumbnail?: ImageOrderByWithRelationInput
  }

  export type SuperheroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    thumbnailName?: string
    AND?: SuperheroWhereInput | SuperheroWhereInput[]
    OR?: SuperheroWhereInput[]
    NOT?: SuperheroWhereInput | SuperheroWhereInput[]
    nickname?: StringFilter<"Superhero"> | string
    real_name?: StringFilter<"Superhero"> | string
    origin_description?: StringFilter<"Superhero"> | string
    superpowers?: StringFilter<"Superhero"> | string
    catch_phrase?: StringFilter<"Superhero"> | string
    createdAt?: DateTimeFilter<"Superhero"> | Date | string
    updatedAt?: DateTimeFilter<"Superhero"> | Date | string
    images?: ImageListRelationFilter
    thumbnail?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id" | "thumbnailName">

  export type SuperheroOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    origin_description?: SortOrder
    superpowers?: SortOrder
    catch_phrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thumbnailName?: SortOrderInput | SortOrder
    _count?: SuperheroCountOrderByAggregateInput
    _avg?: SuperheroAvgOrderByAggregateInput
    _max?: SuperheroMaxOrderByAggregateInput
    _min?: SuperheroMinOrderByAggregateInput
    _sum?: SuperheroSumOrderByAggregateInput
  }

  export type SuperheroScalarWhereWithAggregatesInput = {
    AND?: SuperheroScalarWhereWithAggregatesInput | SuperheroScalarWhereWithAggregatesInput[]
    OR?: SuperheroScalarWhereWithAggregatesInput[]
    NOT?: SuperheroScalarWhereWithAggregatesInput | SuperheroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Superhero"> | number
    nickname?: StringWithAggregatesFilter<"Superhero"> | string
    real_name?: StringWithAggregatesFilter<"Superhero"> | string
    origin_description?: StringWithAggregatesFilter<"Superhero"> | string
    superpowers?: StringWithAggregatesFilter<"Superhero"> | string
    catch_phrase?: StringWithAggregatesFilter<"Superhero"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Superhero"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Superhero"> | Date | string
    thumbnailName?: StringNullableWithAggregatesFilter<"Superhero"> | string | null
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    name?: StringFilter<"Image"> | string
    superheroId?: IntNullableFilter<"Image"> | number | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    superhero?: XOR<SuperheroNullableScalarRelationFilter, SuperheroWhereInput> | null
    thumbnailFor?: XOR<SuperheroNullableScalarRelationFilter, SuperheroWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    name?: SortOrder
    superheroId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    superhero?: SuperheroOrderByWithRelationInput
    thumbnailFor?: SuperheroOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    superheroId?: IntNullableFilter<"Image"> | number | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    superhero?: XOR<SuperheroNullableScalarRelationFilter, SuperheroWhereInput> | null
    thumbnailFor?: XOR<SuperheroNullableScalarRelationFilter, SuperheroWhereInput> | null
  }, "name" | "name">

  export type ImageOrderByWithAggregationInput = {
    name?: SortOrder
    superheroId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Image"> | string
    superheroId?: IntNullableWithAggregatesFilter<"Image"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type SuperheroCreateInput = {
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutSuperheroInput
    thumbnail?: ImageCreateNestedOneWithoutThumbnailForInput
  }

  export type SuperheroUncheckedCreateInput = {
    id?: number
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnailName?: string | null
    images?: ImageUncheckedCreateNestedManyWithoutSuperheroInput
  }

  export type SuperheroUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutSuperheroNestedInput
    thumbnail?: ImageUpdateOneWithoutThumbnailForNestedInput
  }

  export type SuperheroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnailName?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ImageUncheckedUpdateManyWithoutSuperheroNestedInput
  }

  export type SuperheroCreateManyInput = {
    id?: number
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnailName?: string | null
  }

  export type SuperheroUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperheroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnailName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    superhero?: SuperheroCreateNestedOneWithoutImagesInput
    thumbnailFor?: SuperheroCreateNestedOneWithoutThumbnailInput
  }

  export type ImageUncheckedCreateInput = {
    name: string
    superheroId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnailFor?: SuperheroUncheckedCreateNestedOneWithoutThumbnailInput
  }

  export type ImageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superhero?: SuperheroUpdateOneWithoutImagesNestedInput
    thumbnailFor?: SuperheroUpdateOneWithoutThumbnailNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    superheroId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnailFor?: SuperheroUncheckedUpdateOneWithoutThumbnailNestedInput
  }

  export type ImageCreateManyInput = {
    name: string
    superheroId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    superheroId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuperheroCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    origin_description?: SortOrder
    superpowers?: SortOrder
    catch_phrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thumbnailName?: SortOrder
  }

  export type SuperheroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuperheroMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    origin_description?: SortOrder
    superpowers?: SortOrder
    catch_phrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thumbnailName?: SortOrder
  }

  export type SuperheroMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    real_name?: SortOrder
    origin_description?: SortOrder
    superpowers?: SortOrder
    catch_phrase?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    thumbnailName?: SortOrder
  }

  export type SuperheroSumOrderByAggregateInput = {
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SuperheroNullableScalarRelationFilter = {
    is?: SuperheroWhereInput | null
    isNot?: SuperheroWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    name?: SortOrder
    superheroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    superheroId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    name?: SortOrder
    superheroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    name?: SortOrder
    superheroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    superheroId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ImageCreateNestedManyWithoutSuperheroInput = {
    create?: XOR<ImageCreateWithoutSuperheroInput, ImageUncheckedCreateWithoutSuperheroInput> | ImageCreateWithoutSuperheroInput[] | ImageUncheckedCreateWithoutSuperheroInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuperheroInput | ImageCreateOrConnectWithoutSuperheroInput[]
    createMany?: ImageCreateManySuperheroInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ImageCreateNestedOneWithoutThumbnailForInput = {
    create?: XOR<ImageCreateWithoutThumbnailForInput, ImageUncheckedCreateWithoutThumbnailForInput>
    connectOrCreate?: ImageCreateOrConnectWithoutThumbnailForInput
    connect?: ImageWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedManyWithoutSuperheroInput = {
    create?: XOR<ImageCreateWithoutSuperheroInput, ImageUncheckedCreateWithoutSuperheroInput> | ImageCreateWithoutSuperheroInput[] | ImageUncheckedCreateWithoutSuperheroInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuperheroInput | ImageCreateOrConnectWithoutSuperheroInput[]
    createMany?: ImageCreateManySuperheroInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageUpdateManyWithoutSuperheroNestedInput = {
    create?: XOR<ImageCreateWithoutSuperheroInput, ImageUncheckedCreateWithoutSuperheroInput> | ImageCreateWithoutSuperheroInput[] | ImageUncheckedCreateWithoutSuperheroInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuperheroInput | ImageCreateOrConnectWithoutSuperheroInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSuperheroInput | ImageUpsertWithWhereUniqueWithoutSuperheroInput[]
    createMany?: ImageCreateManySuperheroInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSuperheroInput | ImageUpdateWithWhereUniqueWithoutSuperheroInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSuperheroInput | ImageUpdateManyWithWhereWithoutSuperheroInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ImageUpdateOneWithoutThumbnailForNestedInput = {
    create?: XOR<ImageCreateWithoutThumbnailForInput, ImageUncheckedCreateWithoutThumbnailForInput>
    connectOrCreate?: ImageCreateOrConnectWithoutThumbnailForInput
    upsert?: ImageUpsertWithoutThumbnailForInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutThumbnailForInput, ImageUpdateWithoutThumbnailForInput>, ImageUncheckedUpdateWithoutThumbnailForInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ImageUncheckedUpdateManyWithoutSuperheroNestedInput = {
    create?: XOR<ImageCreateWithoutSuperheroInput, ImageUncheckedCreateWithoutSuperheroInput> | ImageCreateWithoutSuperheroInput[] | ImageUncheckedCreateWithoutSuperheroInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuperheroInput | ImageCreateOrConnectWithoutSuperheroInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSuperheroInput | ImageUpsertWithWhereUniqueWithoutSuperheroInput[]
    createMany?: ImageCreateManySuperheroInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSuperheroInput | ImageUpdateWithWhereUniqueWithoutSuperheroInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSuperheroInput | ImageUpdateManyWithWhereWithoutSuperheroInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type SuperheroCreateNestedOneWithoutImagesInput = {
    create?: XOR<SuperheroCreateWithoutImagesInput, SuperheroUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SuperheroCreateOrConnectWithoutImagesInput
    connect?: SuperheroWhereUniqueInput
  }

  export type SuperheroCreateNestedOneWithoutThumbnailInput = {
    create?: XOR<SuperheroCreateWithoutThumbnailInput, SuperheroUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: SuperheroCreateOrConnectWithoutThumbnailInput
    connect?: SuperheroWhereUniqueInput
  }

  export type SuperheroUncheckedCreateNestedOneWithoutThumbnailInput = {
    create?: XOR<SuperheroCreateWithoutThumbnailInput, SuperheroUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: SuperheroCreateOrConnectWithoutThumbnailInput
    connect?: SuperheroWhereUniqueInput
  }

  export type SuperheroUpdateOneWithoutImagesNestedInput = {
    create?: XOR<SuperheroCreateWithoutImagesInput, SuperheroUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SuperheroCreateOrConnectWithoutImagesInput
    upsert?: SuperheroUpsertWithoutImagesInput
    disconnect?: SuperheroWhereInput | boolean
    delete?: SuperheroWhereInput | boolean
    connect?: SuperheroWhereUniqueInput
    update?: XOR<XOR<SuperheroUpdateToOneWithWhereWithoutImagesInput, SuperheroUpdateWithoutImagesInput>, SuperheroUncheckedUpdateWithoutImagesInput>
  }

  export type SuperheroUpdateOneWithoutThumbnailNestedInput = {
    create?: XOR<SuperheroCreateWithoutThumbnailInput, SuperheroUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: SuperheroCreateOrConnectWithoutThumbnailInput
    upsert?: SuperheroUpsertWithoutThumbnailInput
    disconnect?: SuperheroWhereInput | boolean
    delete?: SuperheroWhereInput | boolean
    connect?: SuperheroWhereUniqueInput
    update?: XOR<XOR<SuperheroUpdateToOneWithWhereWithoutThumbnailInput, SuperheroUpdateWithoutThumbnailInput>, SuperheroUncheckedUpdateWithoutThumbnailInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SuperheroUncheckedUpdateOneWithoutThumbnailNestedInput = {
    create?: XOR<SuperheroCreateWithoutThumbnailInput, SuperheroUncheckedCreateWithoutThumbnailInput>
    connectOrCreate?: SuperheroCreateOrConnectWithoutThumbnailInput
    upsert?: SuperheroUpsertWithoutThumbnailInput
    disconnect?: SuperheroWhereInput | boolean
    delete?: SuperheroWhereInput | boolean
    connect?: SuperheroWhereUniqueInput
    update?: XOR<XOR<SuperheroUpdateToOneWithWhereWithoutThumbnailInput, SuperheroUpdateWithoutThumbnailInput>, SuperheroUncheckedUpdateWithoutThumbnailInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ImageCreateWithoutSuperheroInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnailFor?: SuperheroCreateNestedOneWithoutThumbnailInput
  }

  export type ImageUncheckedCreateWithoutSuperheroInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnailFor?: SuperheroUncheckedCreateNestedOneWithoutThumbnailInput
  }

  export type ImageCreateOrConnectWithoutSuperheroInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSuperheroInput, ImageUncheckedCreateWithoutSuperheroInput>
  }

  export type ImageCreateManySuperheroInputEnvelope = {
    data: ImageCreateManySuperheroInput | ImageCreateManySuperheroInput[]
  }

  export type ImageCreateWithoutThumbnailForInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    superhero?: SuperheroCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutThumbnailForInput = {
    name: string
    superheroId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutThumbnailForInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutThumbnailForInput, ImageUncheckedCreateWithoutThumbnailForInput>
  }

  export type ImageUpsertWithWhereUniqueWithoutSuperheroInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutSuperheroInput, ImageUncheckedUpdateWithoutSuperheroInput>
    create: XOR<ImageCreateWithoutSuperheroInput, ImageUncheckedCreateWithoutSuperheroInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutSuperheroInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutSuperheroInput, ImageUncheckedUpdateWithoutSuperheroInput>
  }

  export type ImageUpdateManyWithWhereWithoutSuperheroInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutSuperheroInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    name?: StringFilter<"Image"> | string
    superheroId?: IntNullableFilter<"Image"> | number | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type ImageUpsertWithoutThumbnailForInput = {
    update: XOR<ImageUpdateWithoutThumbnailForInput, ImageUncheckedUpdateWithoutThumbnailForInput>
    create: XOR<ImageCreateWithoutThumbnailForInput, ImageUncheckedCreateWithoutThumbnailForInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutThumbnailForInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutThumbnailForInput, ImageUncheckedUpdateWithoutThumbnailForInput>
  }

  export type ImageUpdateWithoutThumbnailForInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superhero?: SuperheroUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutThumbnailForInput = {
    name?: StringFieldUpdateOperationsInput | string
    superheroId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperheroCreateWithoutImagesInput = {
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnail?: ImageCreateNestedOneWithoutThumbnailForInput
  }

  export type SuperheroUncheckedCreateWithoutImagesInput = {
    id?: number
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    thumbnailName?: string | null
  }

  export type SuperheroCreateOrConnectWithoutImagesInput = {
    where: SuperheroWhereUniqueInput
    create: XOR<SuperheroCreateWithoutImagesInput, SuperheroUncheckedCreateWithoutImagesInput>
  }

  export type SuperheroCreateWithoutThumbnailInput = {
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutSuperheroInput
  }

  export type SuperheroUncheckedCreateWithoutThumbnailInput = {
    id?: number
    nickname: string
    real_name: string
    origin_description: string
    superpowers: string
    catch_phrase: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutSuperheroInput
  }

  export type SuperheroCreateOrConnectWithoutThumbnailInput = {
    where: SuperheroWhereUniqueInput
    create: XOR<SuperheroCreateWithoutThumbnailInput, SuperheroUncheckedCreateWithoutThumbnailInput>
  }

  export type SuperheroUpsertWithoutImagesInput = {
    update: XOR<SuperheroUpdateWithoutImagesInput, SuperheroUncheckedUpdateWithoutImagesInput>
    create: XOR<SuperheroCreateWithoutImagesInput, SuperheroUncheckedCreateWithoutImagesInput>
    where?: SuperheroWhereInput
  }

  export type SuperheroUpdateToOneWithWhereWithoutImagesInput = {
    where?: SuperheroWhereInput
    data: XOR<SuperheroUpdateWithoutImagesInput, SuperheroUncheckedUpdateWithoutImagesInput>
  }

  export type SuperheroUpdateWithoutImagesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnail?: ImageUpdateOneWithoutThumbnailForNestedInput
  }

  export type SuperheroUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnailName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuperheroUpsertWithoutThumbnailInput = {
    update: XOR<SuperheroUpdateWithoutThumbnailInput, SuperheroUncheckedUpdateWithoutThumbnailInput>
    create: XOR<SuperheroCreateWithoutThumbnailInput, SuperheroUncheckedCreateWithoutThumbnailInput>
    where?: SuperheroWhereInput
  }

  export type SuperheroUpdateToOneWithWhereWithoutThumbnailInput = {
    where?: SuperheroWhereInput
    data: XOR<SuperheroUpdateWithoutThumbnailInput, SuperheroUncheckedUpdateWithoutThumbnailInput>
  }

  export type SuperheroUpdateWithoutThumbnailInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutSuperheroNestedInput
  }

  export type SuperheroUncheckedUpdateWithoutThumbnailInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    real_name?: StringFieldUpdateOperationsInput | string
    origin_description?: StringFieldUpdateOperationsInput | string
    superpowers?: StringFieldUpdateOperationsInput | string
    catch_phrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutSuperheroNestedInput
  }

  export type ImageCreateManySuperheroInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateWithoutSuperheroInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnailFor?: SuperheroUpdateOneWithoutThumbnailNestedInput
  }

  export type ImageUncheckedUpdateWithoutSuperheroInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbnailFor?: SuperheroUncheckedUpdateOneWithoutThumbnailNestedInput
  }

  export type ImageUncheckedUpdateManyWithoutSuperheroInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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