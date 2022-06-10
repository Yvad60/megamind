/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Card: { // root type
    back: string; // String!
    creator?: NexusGenRootTypes['User'] | null; // User
    creatorId: number; // Int!
    front: string; // String!
    id: number; // Int!
    isPublic: boolean; // Boolean!
    topic: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    password: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
  }
  Card: { // field return type
    back: string; // String!
    creator: NexusGenRootTypes['User'] | null; // User
    creatorId: number; // Int!
    front: string; // String!
    id: number; // Int!
    isPublic: boolean; // Boolean!
    topic: string; // String!
  }
  Mutation: { // field return type
    deleteUser: boolean; // Boolean!
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    signUp: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    allUsers: NexusGenRootTypes['User'][]; // [User!]!
    publicCards: NexusGenRootTypes['Card'][]; // [Card!]!
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    password: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Card: { // field return type name
    back: 'String'
    creator: 'User'
    creatorId: 'Int'
    front: 'String'
    id: 'Int'
    isPublic: 'Boolean'
    topic: 'String'
  }
  Mutation: { // field return type name
    deleteUser: 'Boolean'
    login: 'AuthPayload'
    signUp: 'AuthPayload'
    updateUser: 'User'
  }
  Query: { // field return type name
    allUsers: 'User'
    publicCards: 'Card'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteUser: { // args
      id: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signUp: { // args
      email: string; // String!
      password: string; // String!
    }
    updateUser: { // args
      email: string; // String!
      id: number; // Int!
      password: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}