import React from 'react';
import { OpenAPIObject, OperationObject } from 'openapi3-ts'

export type operation = 'get' | 'put' | 'post' | 'delete';

export const OpenApiClient: React.FC<{openapi: OpenAPIObject, path: string, operation: operation}> = ({openapi, path, operation}) => {
  
  if ( !openapi.paths[path] ) {
    throw new Error("Cannot find this path on supplied specification");
  } 
  if ( !openapi.paths[path][operation] ) {
    throw new Error("Cannot find this operation on supplied specification");
  }

  const operationObj: OperationObject  = openapi.paths[path][operation];

  return <p>{operationObj.description}</p>
  
}