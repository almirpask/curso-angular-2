export interface ServiceInterface<T> {
   findAll(): Promise<T[]>; 
   find(id: number): Promise<T>;
   create(object: T): Promise<T>;
   update(object: T): Promise<T>;
   delete(objecto: T): Promise<T>;
}